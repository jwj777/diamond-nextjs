"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Box, Link, Spinner } from "@chakra-ui/react";
import TitleLarge from "@/app/_components/typography/TitleLarge";
import PageContainerAccount from "@/app/_layout/PageContainerAccount";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import BodyMedium from "../_components/typography/BodyMedium";

export default function ProfileClient() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user, error, isLoading } = useUser();

  useEffect(() => {
    if (!isLoading && !user) {
      return redirect("/");
    }
    setLoading(true);
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
        setSubscriptions(data);
        console.log("subsc", data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    fetchSubscriptions();
  }, [user, isLoading]);

  return (
    <main>
      <PageContainerAccount data={{ user }}>
        <Box padding={10} position="relative" bg='neutral.10' color={"white"}>
          {isLoading || loading ? (
            <Spinner size="xl" />
          ) : (
            <>
              <TitleLarge color={"white"}>My Account</TitleLarge>
              <Box position="relative" marginTop={10} flex="right" bg='neutral.15' p='8' borderRadius='1rem'>
                <BodyMedium color={"white"}><Text as='span' fontWeight='600'>Email: </Text>{user.email}</BodyMedium>
                <BodyMedium color={"white"}>
                  <Text as='span' fontWeight='600'>Username: </Text>
                  {user.nickname}
                </BodyMedium>
              </Box>
              <Box position="relative" marginTop={20} flex="right" bg='neutral.15' p='8' borderRadius='1rem'>
                <TitleLarge color={"white"}>Membership Details</TitleLarge>
                {subscriptions.length > 0 ? (
                  <>
                    <BodyMedium color={"white"}>
                      Membership Plan: 
                      {subscriptions[0].product.name}
                    </BodyMedium>
                    <BodyMedium color={"white"}>
                      Membership Fee: ${subscriptions[0].plan.amount / 100}
                    </BodyMedium>
                    <BodyMedium color={"white"}>
                      Membership Status:{" "}
                      {subscriptions[0].plan.active ? "Active" : "Deactive"}
                    </BodyMedium>
                  </>
                ) : (
                  <BodyMedium color={"white"}>No Subscription.</BodyMedium>
                )}
              </Box>
              <Box position="relative" marginTop='16' flex="right">
                <Link href="/api/auth/logout" variant="neutralDark">
                  Logout
                </Link>
              </Box>
            </>
          )}
        </Box>
      </PageContainerAccount>
    </main>
  );
}
