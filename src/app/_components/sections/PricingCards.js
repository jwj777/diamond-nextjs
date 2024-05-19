"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import PricingCard from "../card/PricingCard";
import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect } from "react";

export default function PricingCards({ data }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { user, isLoading } = useUser();
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/stripe/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  console.log("subscriptions", products);
  // console.log('Trading Card')
  // console.log(data.CardImage.data.attributes.url)

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
        const stripe = await loadStripe(
          process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
        );
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
    <Box display="flex" flexWrap="wrap" mx="2">
      {products.length > 0 ? (
        <>
          {products.map(
            (product, index) =>
              product.metadata.service === "diamond" && (
                <Box key={index}>
                  <PricingCard
                    title={product.name}
                    price={
                      product.prices[0].unit_amount
                        ? '$'+product.prices[0].unit_amount / 100
                        : "Free"
                    }
                  >
                    <Text as="span" color="neutral.95">
                      {product.description}.{" "}
                    </Text>
                    <Button
                      marginTop={10}
                      display="block"
                      onClick={() => handleSubscribe(product.prices[0].id)}
                      disabled={loading}
                    >
                      Subscribe to Plan
                    </Button>
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
