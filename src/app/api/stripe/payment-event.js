// /api/stripe-webhook.js
import { buffer } from "micro";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = {
  api: {
    bodyParser: false,
  },
};

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export default async (req, res) => {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
    } catch (err) {
      console.error(`⚠️  Webhook signature verification failed.`, err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the checkout.session.completed event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      // Fetch the Checkout Session to include line items
      const sessionWithLineItems = await stripe.checkout.sessions.retrieve(session.id, {
        expand: ['line_items'],
      });

      const { line_items } = sessionWithLineItems;

      // Send the cartDetails to Zapier Webhook
      // await fetch("https://hooks.zapier.com/hooks/catch/8026392/2b1epr8/", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ line_items }),
      // });

      // console.log("Sent line_items to Zapier:", JSON.stringify(line_items, null, 2));

      const cardGradingItems = line_items.data.filter(item => {
        // Assuming card grading products have specific product IDs or names you can check against
        return item.description.includes("Card Grading") || item.price.product === "prod_QXnI7So14My2dN";
      });

      if (cardGradingItems.length > 0) {
        // Send to Zapier for card grading purchases
        await fetch("https://hooks.zapier.com/hooks/catch/8026392/2b1epr8/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ line_items: cardGradingItems }),
        });

        console.log("Sent card grading items to Zapier:", JSON.stringify(cardGradingItems, null, 2));
      } else {
        // Send other purchases to Membership webhook
        await fetch("https://hooks.zapier.com/hooks/catch/8026392/219ausx/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ line_items }),
        });

        console.log("Sent non-card grading items to another Zapier webhook:", JSON.stringify(line_items, null, 2));
      }

    }

    res.json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};
