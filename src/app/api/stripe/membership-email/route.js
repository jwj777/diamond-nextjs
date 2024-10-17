export const POST = async (req) => {
  const sig = req.headers.get("stripe-signature");

  // Log the request body and headers to confirm if the webhook is hitting
  const body = await req.text();
  console.log("Raw body received from Stripe:", body);
  console.log("Stripe Signature:", sig);

  let event;

  try {
    // Process the raw body with Stripe's signature verification
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

    // Skip the filtering for now and just send all items to Zapier
    await fetch("https://hooks.zapier.com/hooks/catch/8026392/219ausx/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subscriptionItems }),
    });

    console.log("Sent subscription items to Zapier:", JSON.stringify(subscriptionItems, null, 2));
  }

  return new Response("Webhook received and processed", { status: 200 });
};
