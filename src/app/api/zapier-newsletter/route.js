import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const { email, status } = await req.json();

  // Set the correct Zapier URL based on subscription status
  const zapierUrl =
    status === "opt-in"
      ? "https://hooks.zapier.com/hooks/catch/8026392/2uje0li/"
      : "https://hooks.zapier.com/hooks/catch/8026392/29w5lku/";

  try {
    // Retrieve customer from Stripe using email
    const customers = await stripe.customers.list({ email });
    if (customers.data.length === 0) {
      return new Response("Customer not found in Stripe", { status: 404 });
    }

    // Get the customer ID from Stripe
    const customerId = customers.data[0].id;

    // Send customer ID and email to Zapier
    const zapierResponse = await fetch(zapierUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, customer_id: customerId }),
    });

    if (!zapierResponse.ok) {
      return new Response("Failed to send data to Zapier", { status: 500 });
    }

    return new Response("Data sent to Zapier successfully", { status: 200 });
  } catch (error) {
    console.error("Error in fetching customer or sending data to Zapier:", error);
    return new Response("Server error", { status: 500 });
  }
}
