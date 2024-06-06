"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Box, Text, Button, Link } from "@chakra-ui/react";
import PricingCard from "../card/PricingCard";
import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect } from "react";

async function getPlans() { 
  try {
    const url = 'https://strapi-production-0074.up.railway.app' + '/api/member-plans?[populate]=*';
    console.log("Fetching plans from URL:", url);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch plans, status: ${response.status}`);
    }
    const plans = await response.json();
    console.log("Fetched plans:", plans);
    return plans?.data;
  } catch (error) {
    console.error("Error fetching plans:", error);
    throw new Error("Failed to fetch plans");
  }
}

export default function PricingCards({ data }) {
  const [products, setProducts] = useState([]);
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMembership, setHasMembership] = useState(false);

  const { user, isLoading } = useUser();

  useEffect(() => {
    async function fetchData() {
      try {
        const productsResponse = await fetch("/api/stripe/products");
        if (!productsResponse.ok) {
          throw new Error(`Failed to fetch products, status: ${productsResponse.status}`);
        }
        const productsData = await productsResponse.json();
        const plansData = await getPlans();

        // Combine the data
        const combinedData = productsData.map(product => {
          const plan = plansData.find(plan => plan.attributes.Stripe_ID === product.id);
          if (plan) {
            return {
              ...product,
              highlight: plan.attributes.Highlight,
              features: plan.attributes.Features,
            };
          }
          return product;
        });

        console.log("Combined data:", combinedData);

        setProducts(combinedData);
        setPlans(plansData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (isLoading) return; // Wait until loading is done
    if (!user) return;

    async function fetchSubscriptions() {
      try {
        const customerRes = await fetch(`/api/stripe/customer?email=${user.email}`);
        const customerData = await customerRes.json();

        const response = await fetch(`/api/stripe/subscriptions?customerId=${customerData.id}`);
        const data = await response.json();

        // Check if user has any subscriptions
        if (data && data.length > 0) {
          setHasMembership(true);
        }
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
      }
    }
    fetchSubscriptions();
  }, [user, isLoading]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log("subscriptions", products);
  console.log("plans", plans);

  const handleSubscribe = async (priceId) => {
    setLoading(true);
    setError(null);

    try {
      const customerRes = await fetch(`/api/stripe/customer?email=${user.email}`);
      const customerData = await customerRes.json();

      const response = await fetch("/api/stripe/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId, customerId: customerData.id }),
      });

      const data = await response.json();
      if (data.sessionId) {
        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
        const { error } = await stripe.redirectToCheckout({
          sessionId: data.sessionId,
        });
        if (error) {
          setError(error.message);
        }
      } else {
        setError("Failed to create Stripe Checkout session");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <Box display="flex" flexWrap="wrap" alignItems='stretch' ml='-2' mb='24'>
      {products.length > 0 ? (
        <>
          {products.map(
            (product, index) =>
              product.metadata.service === "diamond" && (
                <Box key={index}>
                  <PricingCard
                    title={product.name}
                    highlight={product.highlight}
                    price={
                      product.prices[0].unit_amount
                        ? '$' + product.prices[0].unit_amount / 100
                        : "Free"
                    }
                    features={product.features}
                  >
                    <Box display={'flex'} justifyContent={'center'} mb='8'>
                      {hasMembership ? (
                        <Button
                          display="block"
                          onClick={() => handleSubscribe(product.prices[0].id)}
                          disabled={loading}
                          variant='primaryDark'
                          size='md'
                        >
                          Subscribe to Plan
                        </Button>
                      ) : (
                        <Link href="/api/auth/login" variant='primaryDark'>
                          Sign Up Today
                        </Link>
                      )}
                    </Box>
                  </PricingCard>
                </Box>
              )
          )}
        </>
      ) : (
        <p>No Products found.</p>
      )}
    </Box>
  );
}
