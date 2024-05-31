"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Box, Text, Button } from "@chakra-ui/react";
import PricingCard from "../card/PricingCard";
import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect } from "react";

async function getPlans() {
  try {
    const url = process.env.BASE_URL + '/api/member-plans?[populate]=*';
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
            // console.log(`Matching plan found for product ${product.id}:`, plan);
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
                    {/* {product.features && product.features.map((feature, idx) => (
                      <Text key={idx} as="span" color="neutral.95">
                        {feature.Text}
                      </Text>
                    ))} */}
                    <Box display={'flex'} justifyContent={'center'} mb='8'>
                      <Button
                        display="block"
                        onClick={() => handleSubscribe(product.prices[0].id)}
                        disabled={loading}
                        variant='primaryDark'
                      >
                        Subscribe to Plan
                      </Button>
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
