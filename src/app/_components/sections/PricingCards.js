"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Box, Text, Button, Link, Spinner, Switch } from "@chakra-ui/react";
import PricingCard from "../card/PricingCard";
import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect } from "react";
import BodyMedium from "../typography/BodyMedium";
import BodyLarge from "../typography/BodyLarge";


async function getPlans() {
  try {
    const url = "https://strapi-production-0074.up.railway.app/api/member-plans?[populate]=*";
    const response = await fetch(url);

    if (!response.ok) {
      const errorText = await response.text(); // Get the response text
      console.error("Failed to fetch plans, response text:", errorText); // Log the response text
      throw new Error(`Failed to fetch plans, status: ${response.status}`);
    }

    const plans = await response.json();
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
  const [isAnnual, setIsAnnual] = useState(true);
  const { user, isLoading } = useUser();

  useEffect(() => {
    async function fetchData() {
      try {
        const productsResponse = await fetch("/api/stripe/products");
        // console.log("Fetched products:", productsResponse);

        if (!productsResponse.ok) {
          throw new Error(
            `Failed to fetch products, status: ${productsResponse.status}`
          );
        }

        const productsData = await productsResponse.json();
        const plansData = await getPlans();
  
        // Combine the data
        const combinedData = productsData.map((product) => {
          const plan = plansData.find((plan) => {
            return plan.attributes.Stripe_ID === product.id;
          });
        
          if (plan) {
            const monthlyPrice = product.prices.find(price => price.recurring.interval === 'month');
            const yearlyPrice = product.prices.find(price => price.recurring.interval === 'year');
        
            return {
              ...product,
              highlight: plan.attributes.Highlight,
              features: plan.attributes.Features,
              monthlyPrice: monthlyPrice ? monthlyPrice.unit_amount / 100 : null,
              yearlyPrice: yearlyPrice ? yearlyPrice.unit_amount / 100 : null,
              monthlyPriceId: monthlyPrice ? monthlyPrice.id : null,
              yearlyPriceId: yearlyPrice ? yearlyPrice.id : null,
            };
          } else {
            return product;
          }
        });
  
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


  return (

    <Box>

      <Box display='flex' alignItems='center' mb='8'>
        <Switch 
          size='lg' 
          mr='4'  
          isChecked={!isAnnual}
          onChange={() => setIsAnnual(!isAnnual)}
        />
        <BodyLarge color='neutral.90'>Monthly Options Available</BodyLarge>
      </Box>
      
      <Box display="flex" flexWrap="wrap" alignItems="stretch" justifyContent='center' ml="-2" mb="16">
        {products.length > 0 ? (
          <>
            {products.map(
              (product, index) =>
                product.metadata.service === "membership" && (
                  <Box key={index} mb='4'>
                    <PricingCard
                      title={product.name}
                      highlight={product.highlight}
                      isAnnual={isAnnual}
                      product={product}
                      price={
                        isAnnual
                          ? product.yearlyPrice
                            ? "$" + product.yearlyPrice
                            : "Not Available"
                          : product.monthlyPrice
                            ? "$" + product.monthlyPrice
                            : "Not Available"
                      }
                      features={product.features}
                    >
                      <Box display={"flex"} justifyContent={"center"} mb="8">
                        {user ? (
                          <Button
                            display="block"
                            onClick={() => handleSubscribe(isAnnual ? product.yearlyPriceId : product.monthlyPriceId)}
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
    </Box>
  );
}
