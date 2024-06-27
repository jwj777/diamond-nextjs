import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const GET = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const customerId = searchParams.get("customerId");

  if (!customerId) {
    throw new Error("Missing customerId");
  }

  try {
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
    });

    console.log("Fetched subscriptions:", subscriptions);
    
    const enrichedSubscriptions = await Promise.all(subscriptions.data.map(async (subscription) => {
      // For each subscription item, fetch the product details
      const product = await stripe.products.retrieve(subscription.items.data[0].price.product);

      return {
        ...subscription,
        product,
      };
    }));

    return new Response(JSON.stringify(enrichedSubscriptions), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};

