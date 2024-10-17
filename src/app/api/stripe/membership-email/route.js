import Stripe from "stripe";

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const POST = async (req) => {
  const sig = req.headers.get("stripe-signature");

  let event;

  try {
    const body = await req.text(); // Read the raw body as text
    // Verify the webhook signature using your secret key
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET); 
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

    // Iterate through the subscription items and send to the appropriate Zapier URL
    for (const item of subscriptionItems) {
      const productId = item.price.product;

      if (productId === 'prod_QXnI7So14My2dN') {
        // Send the request to the specific Zapier webhook for prod_QXnI7So14My2dN
        await fetch("https://hooks.zapier.com/hooks/catch/8026392/24dco28/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ subscriptionItems: item }),
        });

      } else {
        // Send the request to the default Zapier webhook for other product IDs
        await fetch("https://hooks.zapier.com/hooks/catch/8026392/219ausx/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ subscriptionItems: item }),
        });
        console.log("Sent to Zapier webhook for other products:", JSON.stringify(item, null, 2));
      }
      
    }
  }

  return new Response("Webhook received and processed", { status: 200 });
};
