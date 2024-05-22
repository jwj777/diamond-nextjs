import Stripe from "stripe";
import { validateCartItems } from "use-shopping-cart/utilities";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const POST = async (req) => {
  const body = await req.json();
  const { cartDetails, customerId } = body;
  console.log(cartDetails);
  const line_items = Object.keys(cartDetails).map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: cartDetails[item].name,
        description: cartDetails[item].description,
      },
      unit_amount: cartDetails[item].price, // Stripe expects the amount in cents
    },
    quantity: cartDetails[item].quantity,
  }));
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      customer: customerId,
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
