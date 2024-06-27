import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  try {
    const customers = await stripe.customers.list({
      email,
    });

    if (customers.data.length === 0) {
      return new Response(
        JSON.stringify({ error: "No customer found with that email." }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(JSON.stringify(customers.data[0]), {
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


