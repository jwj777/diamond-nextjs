"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Box, Text, Button, Link, Spinner } from "@chakra-ui/react";
import PricingCard from "../card/PricingCard";
import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect } from "react";
import BodyMedium from "../typography/BodyMedium";


async function getPlans() {
  try {
    const url = "https://strapi-production-0074.up.railway.app/api/member-plans?[populate]=*";
    console.log("Fetching plans from URL:", url);
    const response = await fetch(url);
    console.log("Response status:", response.status); // Log the status code

    if (!response.ok) {
      const errorText = await response.text(); // Get the response text
      console.error("Failed to fetch plans, response text:", errorText); // Log the response text
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


  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const productsResponse = await fetch("/api/stripe/products");
  //       if (!productsResponse.ok) {
  //         throw new Error(
  //           `Failed to fetch products, status: ${productsResponse.status}`
  //         );
  //       }
  //       const productsData = await productsResponse.json();
  //       const plansData = await getPlans();
  
  //       // Combine the data
  //       const combinedData = productsData.map((product) => {
  //         const plan = plansData.find(
  //           (plan) => {
  //             console.log(`Comparing product id: ${product.id} with plan Stripe_ID: ${plan.attributes.Stripe_ID}`);
  //             return plan.attributes.Stripe_ID === product.id;
  //           }
  //         );
  //         if (plan) {
  //           return {
  //             ...product,
  //             highlight: plan.attributes.Highlight,
  //             features: plan.attributes.Features,
  //           };
  //         }
  //         console.log(`No matching plan found for product id: ${product.id}`);
  //         return product;
  //       });
  
  //       console.log("Combined data:", combinedData);
  
  //       setProducts(combinedData);
  //       setPlans(plansData);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       setError(error.message);
  //       setLoading(false);
  //     }
  //   }
  //   fetchData();
  // }, []);


  useEffect(() => {
    async function fetchData() {
      try {
        const productsResponse = await fetch("/api/stripe/products");
        if (!productsResponse.ok) {
          throw new Error(
            `Failed to fetch products, status: ${productsResponse.status}`
          );
        }
        const productsData = await productsResponse.json();
        const plansData = await getPlans();
  
        console.log("Fetched plans:", plansData);
  
        // Combine the data
        const combinedData = productsData.map((product) => {
          const plan = plansData.find((plan) => {
            console.log(
              `Comparing product id: ${product.id} with plan Stripe_ID: ${plan.attributes.Stripe_ID}`
            );
            return plan.attributes.Stripe_ID === product.id;
          });
  
          if (plan) {
            console.log(`Match found for product id: ${product.id}`);
            return {
              ...product,
              highlight: plan.attributes.Highlight,
              features: plan.attributes.Features,
            };
          } else {
            console.log(`No matching plan found for product id: ${product.id}`);
            return product;
          }
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
        const customerRes = await fetch(
          `/api/stripe/customer?email=${user.email}`
        );
        const customerData = await customerRes.json();

        const response = await fetch(
          `/api/stripe/subscriptions?customerId=${customerData.id}`
        );
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
    return (
      <Box display='flex' justifyContent='center' pt='0' pb='24'>
        <Box textAlign={'center'}>
          <Spinner color="primary.80" emptyColor="neutral.30" size='xl' mb='2' />
          <BodyMedium color='primary.80'>Loading Plans</BodyMedium>
        </Box>
      </Box>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }


  const handleSubscribe = async (priceId) => {
    setLoading(true);
    setError(null);

    try {
      const customerRes = await fetch(
        `/api/stripe/customer?email=${user.email}`
      );
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

  console.log("Products Fijnal ---- ", products.length)

  return (
    <Box display="flex" flexWrap="wrap" alignItems="stretch" ml="-2" mb="16">
      {products.length > 0 ? (
        <>
          {products.map(
            (product, index) =>
              product.metadata.service === "membership" && (
                <Box key={index}>
                  <PricingCard
                    title={product.name}
                    highlight={product.highlight}
                    price={
                      product.prices[0].unit_amount
                        ? "$" + product.prices[0].unit_amount / 100
                        : "Free"
                    }
                    features={product.features}
                  >
                    <Box display={"flex"} justifyContent={"center"} mb="8">
                      {user ? (
                        <Button
                          display="block"
                          onClick={() => handleSubscribe(product.prices[0].id)}
                          disabled={loading}
                          variant="primaryDark"
                          size="md"
                        >
                          Subscribe to Plan
                        </Button>
                      ) : (
                        <Link href="/api/auth/login" variant="primaryDark">
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
