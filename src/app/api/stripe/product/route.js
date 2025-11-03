import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { cartDetails, customerId, totalOrderCost, shippingCost } = body;

    console.log("Received body:", JSON.stringify(body, null, 2));

    if (!cartDetails || !customerId || !totalOrderCost || isNaN(parseFloat(shippingCost))) {
      throw new Error("Missing cartDetails, customerId, totalOrderCost, or invalid shippingCost");
    }

    // Create line items for each product in the cartDetails
    const line_items = Object.keys(cartDetails).map((key) => {
      const item = cartDetails[key];

      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: `${item.product_data.year} ${item.product_data.brandSet} ${item.name} ${item.product_data.number} ${item.description} Declared Value: ${item.product_data.value}, Slab Style: ${item.product_data.slabStyle}`,
            metadata: {
              year: item.product_data.year,
              brandSet: item.product_data.brandSet,
              number: item.product_data.number,
              desc: item.product_data.desc,
              value: item.product_data.value,
              slabStyle: item.product_data.slabStyle,
            },
          },
          unit_amount: item.price, 
        },
        quantity: 1,
      };
    });

    // Add a separate line item for the shipping cost
    line_items.push({
      price_data: {
        currency: "usd",
        product: 'prod_QjuKr5XQzqcim4', // Replace with your actual shipping product ID from Stripe
        unit_amount: Math.round(parseFloat(shippingCost) * 100), // Convert shipping cost to cents
        // product_data: {
        //   name: "Shipping",
        // },
      },
      quantity: 1,
    });

    console.log("Line items:", JSON.stringify(line_items, null, 2));

    const sessionParams = {
      payment_method_types: ["card"],
      line_items,
      customer: customerId,
      billing_address_collection: 'required', 
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'], 
      },
      success_url: `${process.env.AUTH0_BASE_URL}/account`,
      cancel_url: `${process.env.AUTH0_BASE_URL}`,
      mode: "payment",
      allow_promotion_codes: true, // Ensure this is enabled to allow promotion codes
      invoice_creation: {
        enabled: true,
        invoice_data: {
          description: `Please print out this invoice and send it in with your order to the 
          address listed below:\n\nDiamond Grade Cards LLC\nP.O. Box 550\n500 SW South Ave\nBlue Springs, MO 64014\nUnited States`,
        },
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
