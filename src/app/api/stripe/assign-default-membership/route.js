// /api/stripe/assign-default-membership.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

console.log("assignDefaultMembership triggered")

export async function POST(req) {
  try {
    const { customerId, planId } = await req.json();

    if (!customerId || !planId) {
      return new Response(
        JSON.stringify({ error: "Missing customerId or planId" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Create a new subscription for the customer with the provided plan
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ plan: planId }],
      expand: ["latest_invoice.payment_intent"], // Expands to include payment status info if needed
    });

    return new Response(JSON.stringify(subscription), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error assigning default membership:", error.message);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
