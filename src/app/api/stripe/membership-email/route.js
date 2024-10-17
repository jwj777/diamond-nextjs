import Stripe from "stripe";

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const POST = async (req) => {
  const sig = req.headers.get("stripe-signature");

  let event;

  console.log("STRIPE_SECRET_KEY:", process.env.STRIPE_SECRET_KEY);
  console.log("STRIPE_WEBHOOK_SECRET:", process.env.STRIPE_WEBHOOK_SECRET);

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

    // If you have additional logic, like sending data to Zapier, place it here

  }

  return new Response("Webhook received and processed", { status: 200 });
};
