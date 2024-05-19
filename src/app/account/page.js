"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Box, Link, Spinner } from "@chakra-ui/react";
import TitleLarge from "@/app/_components/typography/TitleLarge";
import PageContainerAccount from "@/app/_layout/PageContainerAccount";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";

export default function ProfileClient() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user, error, isLoading } = useUser();
  // const { user } = await getSession();

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
        <Box padding={10} position="relative" color={"white"}>
          {isLoading || loading ? (
            <Spinner size="xl" />
          ) : (
            <>
              <TitleLarge color={"white"}>My Account</TitleLarge>
              <Box position="relative" marginTop={10} flex="right">
                <TitleLarge color={"white"}>Email: {user.email}</TitleLarge>
                <TitleLarge color={"white"}>
                  Username: {user.nickname}
                </TitleLarge>
              </Box>
              <Box position="relative" marginTop={20} flex="right">
                <TitleLarge color={"white"}>Membership Details</TitleLarge>
                {subscriptions.length > 0 ? (
                  <>
                    <TitleLarge color={"white"}>
                      Membership Plan: {subscriptions[0].product.name}
                    </TitleLarge>
                    <TitleLarge color={"white"}>
                      Membership Fee: ${subscriptions[0].plan.amount / 100}
                    </TitleLarge>
                    <TitleLarge color={"white"}>
                      Membership Status:{" "}
                      {subscriptions[0].plan.active ? "Active" : "Deactive"}
                    </TitleLarge>
                  </>
                ) : (
                  <TitleLarge color={"white"}>No Subscription.</TitleLarge>
                )}
              </Box>
              <Box position="relative" marginTop={10} flex="right">
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
