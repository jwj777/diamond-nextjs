import { buffer } from "micro";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = {
  api: {
    bodyParser: false,
  },
};

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export const POST = async (req) => {
  const buf = await buffer(req);
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
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

    // Here, you can filter for specific products or services
    const membershipItems = line_items.data.filter(item => {
      // Assuming membership products have specific IDs or names
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
