// import Stripe from "stripe";
// import { validateCartItems } from "use-shopping-cart/utilities";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export const POST = async (req) => {
//   const body = await req.json();
//   const { cartDetails, customerId } = body;

//   const line_items = Object.keys(cartDetails).map((item) => ({
//     price_data: {
//       currency: "usd",
//       product_data: {
//         name: cartDetails[item].name,
//         description: `${cartDetails[item].name} ${cartDetails[item].product_data.year} ${cartDetails[item].product_data.brand} ${cartDetails[item].product_data.value}`,
//         metadata: cartDetails[item].product_data
//       },
//       unit_amount: cartDetails[item].price, // Stripe expects the amount in cents
//     },
//     quantity: cartDetails[item].quantity,
//   }));

//   try {
//     const sessionParams = {
//       payment_method_types: ["card"],
//       line_items,
//       customer: customerId,
//       success_url: `${process.env.AUTH0_BASE_URL}/account`,
//       cancel_url: `${process.env.AUTH0_BASE_URL}`,
//       payment_method_collection: totalAmount === 0 ? "if_required" : "always",
//       mode: "payment",
//     };

//     // Check if all items in the cart are free
//     const isFree = line_items.every(item => item.price_data.unit_amount === 0);

//     if (isFree) {
//       sessionParams.mode = "setup";
//       sessionParams.payment_method_types = [];
//       sessionParams.payment_status = "no_payment_required";
//     } else {
//       sessionParams.mode = "payment";
//     }

//     const session = await stripe.checkout.sessions.create(sessionParams);

//     return new Response(JSON.stringify({ sessionId: session.id, paymentStatus: session.payment_status }), {
//       status: 200,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   } catch (error) {
//     console.log(error.message);
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }
// };


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
          product_data: {
            name: "Total Order Cost",
            description: "Total cost including grading fees and shipping",
          },
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

