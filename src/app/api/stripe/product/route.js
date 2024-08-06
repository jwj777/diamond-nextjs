
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export const POST = async (req) => {
//   try {
//     const body = await req.json();
//     const { cartDetails, customerId, totalOrderCost } = body;

//     console.log("Received body:", JSON.stringify(body, null, 2));

//     if (!cartDetails || !customerId || !totalOrderCost) {
//       throw new Error("Missing cartDetails, customerId, or totalOrderCost");
//     }

//     // Create a single line item for the total order cost
//     const line_items = [
//       {
//         price_data: {
//           currency: "usd",
//           product: "prod_QXnI7So14My2dN",
//           // product_data: {
//           //   name: "Total Order Cost",
//           //   description: "Total cost including grading fees and shipping",
//           // },
//           unit_amount: Math.round(totalOrderCost * 100), // Convert total order cost to cents
//         },
//         quantity: 1,
//       },
//     ];

//     console.log("Line items:", JSON.stringify(line_items, null, 2));

//     const sessionParams = {
//       payment_method_types: ["card"],
//       line_items,
//       customer: customerId,
//       success_url: `${process.env.AUTH0_BASE_URL}/account`,
//       cancel_url: `${process.env.AUTH0_BASE_URL}`,
//       mode: "payment",
//       allow_promotion_codes: true,
//     };

//     const session = await stripe.checkout.sessions.create(sessionParams);

//     return new Response(JSON.stringify({ sessionId: session.id, paymentStatus: session.payment_status }), {
//       status: 200,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   } catch (error) {
//     console.error("Error creating Stripe session:", error); 
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

    // Create line items for each product in the cartDetails
    const line_items = Object.keys(cartDetails).map((key) => {
      const item = cartDetails[key];

      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: `${item.product_data.year} ${item.product_data.brandSet} ${item.name} ${item.product_data.number} ${item.description} Declared Value: ${item.product_data.value}, Slab Style: ${item.product_data.slabStyle}`,
            // description: `Please print out this invoice and send it in with your order to the address listed below`,
            metadata: {
              year: item.product_data.year,
              brandSet: item.product_data.brandSet,
              number: item.product_data.number,
              desc: item.product_data.desc,
              value: item.product_data.value,
              slabStyle: item.product_data.slabStyle,
            },
          },
          unit_amount: item.price, // Stripe expects the amount in cents
        },
        quantity: 1,
      };
    });

    console.log("Line items:", JSON.stringify(line_items, null, 2));

    const sessionParams = {
      payment_method_types: ["card"],
      line_items,
      customer: customerId,
      success_url: `${process.env.AUTH0_BASE_URL}/account`,
      cancel_url: `${process.env.AUTH0_BASE_URL}`,
      mode: "payment",
      allow_promotion_codes: true,
      invoice_creation: {
        enabled: true,
        invoice_data: {
          description: `Please print out this invoice and send it in with your order to the address listed below:\n\nDiamond Grade Cards LLC\n1040 SW Luttrell Rd\nE-1\nBlue Springs, Missouri 64015\nUnited States`,
        }
      },
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
