import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const POST = async (req) => {
  const sig = req.headers.get("stripe-signature");

  let event;

  try {
    const body = await req.text(); // Read the raw body as text
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET); // Construct the Stripe event
  } catch (err) {
    console.error("⚠️ Webhook signature verification failed.", err.message);
    return new Response(`Webhook Error: ${err.message}`, {
      status: 400,
    });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    // Fetch the subscription to include product details
    const subscription = await stripe.subscriptions.retrieve(session.subscription, {
      expand: ['items.data.price.product'], // Expands the product details
    });

    const subscriptionItems = subscription.items.data;
    
    // Log subscription items to check the actual product data
    console.log("Subscription Items:", JSON.stringify(subscriptionItems, null, 2));

    // Filter for membership products
    const membershipItems = subscriptionItems.filter(item => {
      // Use the actual product IDs from the log above
      return item.price.product === "prod_QXnFIxIXPwSySv" || item.price.product === "prod_QXnGuxYlhBwnRS";
    });

    // If membership items are found, send them to Zapier
    if (membershipItems.length > 0) {
      await fetch("https://hooks.zapier.com/hooks/catch/8026392/219ausx/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ membershipItems }),
      });

      console.log("Sent membership items to Zapier:", JSON.stringify(membershipItems, null, 2));
    } else {
      console.log("No membership items found in the subscription.");
    }
  }

  return new Response("Webhook received and processed", { status: 200 });
};