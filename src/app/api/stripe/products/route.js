import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const GET = async (req) => {
  try {
    let products = await stripe.products.list();
    const prices = await stripe.prices.list({
      expand: ["data.product"],
    });
    const productIdToPrice = prices.data.reduce((acc, price) => {
      const productId = price.product.id;
      if (!acc[productId]) {
        acc[productId] = [];
      }
      acc[productId].push(price);
      return acc;
    }, {});

    products = products.data.map((product) => ({
      ...product,
      prices: productIdToPrice[product.id] || [],
    }));

    products.sort((a, b) => {
      return a.prices[0].unit_amount - b.prices[0].unit_amount;
    });
    
    return new Response(JSON.stringify(products), {
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

