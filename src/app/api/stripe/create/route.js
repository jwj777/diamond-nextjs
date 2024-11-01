import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const POST = async (req) => {
  const body = await req.json();
  const { priceId, customerId, email } = body;

  try {
    let customer = null;
    if (customerId) {
      customer = await stripe.customers.retrieve(customerId);
      console.log("Existing Customer")
    } else {
      // Create a new customer with metadata if no ID is provided
      console.log("New Customer")
      customer = await stripe.customers.create({
        email,
        metadata: {
          newsletter_status: "not_subscribed", // Default status for new customers
        },
      });
    }

    // Create the checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      customer: customer.id,
      allow_promotion_codes: true,
      success_url: `${process.env.AUTH0_BASE_URL}/account`,
      cancel_url: `${process.env.AUTH0_BASE_URL}`,
    });

    return new Response(JSON.stringify({ sessionId: session.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
