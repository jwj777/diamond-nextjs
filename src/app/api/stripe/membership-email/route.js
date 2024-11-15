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

    // Retrieve customer details to get the email, as customer_details may be null
    const customer = await stripe.customers.retrieve(session.customer);

    // Check if it's a subscription-based checkout session or a one-time payment session
    if (session.subscription) {
      // Handle subscription-based checkout session
      const subscription = await stripe.subscriptions.retrieve(session.subscription, {
        expand: ['items.data.price.product'], // Expands the product details
      });

      const subscriptionItems = subscription.items.data;

      // Log subscription items to check the actual product data
      console.log("Subscription Items:", JSON.stringify(subscriptionItems, null, 2));

      // Iterate through the subscription items and send to the appropriate Zapier URL
      for (const item of subscriptionItems) {
        const productId = item.price.product;

        const payload = {
          subscriptionItems: item,
          productId: productId, // Include the product ID
          customerEmail: customer.email, // Include the customer's email
        };

        // Check if it's a card order product (assuming product ID 'prod_QXnI7So14My2dN' is for card orders)
        if (productId === 'prod_QXnI7So14My2dN') {
          // Send the request to the specific Zapier webhook for card orders
          await fetch("https://hooks.zapier.com/hooks/catch/8026392/24dco28/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });
          console.log("Sent to Zapier webhook for card orders (prod_QXnI7So14My2dN):", JSON.stringify(payload, null, 2));
        } else {
          // Send the request to the membership Zapier webhook for other product IDs
          await fetch("https://hooks.zapier.com/hooks/catch/8026392/219ausx/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });
          console.log("Sent to Zapier webhook for other membership products:", JSON.stringify(payload, null, 2));
        }
      }
    } else {
      // Handle one-time payment checkout session (e.g., card orders)
      const payload = {
        sessionId: session.id,
        customerEmail: customer.email, // Include the customer's email
        amountTotal: session.amount_total,
        orderDetails: session, // Include the order details for card orders
        productId: session.metadata.product_id || 'Unknown', // Include product ID, assuming it's in metadata, or default to 'Unknown'
      };

      // Send the card order data to the card order Zapier webhook
      await fetch("https://hooks.zapier.com/hooks/catch/8026392/24dco28/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Sent one-time payment order details to Zapier for card orders:", JSON.stringify(payload, null, 2));
    }
  }

  return new Response("Webhook received and processed", { status: 200 });
};
