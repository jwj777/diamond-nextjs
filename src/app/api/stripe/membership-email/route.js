import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Use the new configuration for Next.js App Router
export const dynamic = 'force-dynamic'; // This replaces the old export const config

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export const POST = async (req) => {
  const sig = req.headers.get("stripe-signature");

  let event;

  try {
    const body = await req.text(); // Read the raw body as text
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret); // Construct the Stripe event
  } catch (err) {
    console.error("⚠️ Webhook signature verification failed.", err.message);
    return new Response(`Webhook Error: ${err.message}`, {
      status: 400,
    });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    // Fetch the Checkout Session to include line items
    const sessionWithLineItems = await stripe.checkout.sessions.retrieve(session.id, {
      expand: ['line_items'],
    });

    const { line_items } = sessionWithLineItems;

    // Filter for membership items
    const membershipItems = line_items.data.filter(item => {
      return item.price.product === "prod_QXnFIxIXPwSySv" || item.price.product === "prod_QXnGuxYlhBwnRS";
    });

    if (membershipItems.length > 0) {
      // Send membership purchase data to Zapier
      await fetch("https://hooks.zapier.com/hooks/catch/8026392/219ausx/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ line_items: membershipItems }),
      });

      console.log("Sent membership items to Zapier:", JSON.stringify(membershipItems, null, 2));
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
    });
  }

  return new Response("Method Not Allowed", {
    status: 405,
  });
};
