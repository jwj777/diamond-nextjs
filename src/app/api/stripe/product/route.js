
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { cartDetails, customerId, totalOrderCost } = body;

    console.log("Received body:", JSON.stringify(body, null, 2));

    if (!cartDetails || !customerId || !totalOrderCost) {
      throw new Error("Missing cartDetails, customerId, or totalOrderCost");
    }

    // Create a single line item for the total order cost
    const line_items = [
      {
        price_data: {
          currency: "usd",
          product: "prod_QXnI7So14My2dN",
          // product_data: {
          //   name: "Total Order Cost",
          //   description: "Total cost including grading fees and shipping",
          // },
          unit_amount: Math.round(totalOrderCost * 100), // Convert total order cost to cents
        },
        quantity: 1,
      },
    ];

    console.log("Line items:", JSON.stringify(line_items, null, 2));

    const sessionParams = {
      payment_method_types: ["card"],
      line_items,
      customer: customerId,
      success_url: `${process.env.AUTH0_BASE_URL}/account`,
      cancel_url: `${process.env.AUTH0_BASE_URL}`,
      mode: "payment",
      allow_promotion_codes: true,
    };

    const session = await stripe.checkout.sessions.create(sessionParams);

    return new Response(JSON.stringify({ sessionId: session.id, paymentStatus: session.payment_status }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error creating Stripe session:", error); 
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};

