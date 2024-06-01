"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Box, Link, Spinner, Text } from "@chakra-ui/react";
import TitleLarge from "@/app/_components/typography/TitleLarge";
import PageContainerAccount from "@/app/_layout/PageContainerAccount";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import BodyMedium from "../_components/typography/BodyMedium";
import Footer from "../_layout/footer/Footer";
import HeadlineSmall from "../_components/typography/HeadlineSmall";

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
        <Box 
          display='flex'
          flexDir={'column'}
          padding={10} 
          pb='24'
          position="relative" 
          bg='neutral.10' 
        >
          {isLoading || loading ? (
            <Spinner size="xl" />
          ) : (
            <>
              <TitleLarge color='neutral.90'>My Account</TitleLarge>
              <Box 
                display='inline-block' 
                position="relative" 
                mt='12' 
                width='fit-content'
                bg='neutral.20' 
                p='8' 
                pr='12'
                borderRadius='1rem'
              >
                <Box mb='2'>
                  <BodyMedium color={"white"}>
                    <Text as='span' fontWeight='600' mr='1'>Email: </Text>
                    <Text as='span' color='neutral.90'>{user.email}</Text>
                  </BodyMedium>
                </Box>
                <Box>
                  <BodyMedium color={"white"}>
                    <Text as='span' fontWeight='600' mr='1'>Username: </Text>
                    <Text as='span' color='neutral.90'>{user.nickname}</Text>
                  </BodyMedium>
                </Box>
              </Box>
              <Box 
                display='inline-block' 
                position="relative" 
                width='fit-content'
                mt='8' 
                bg='neutral.20' 
                p='8' 
                pr='12'
                borderRadius='1rem'
              >
                <HeadlineSmall color='neutral.90'>Membership Details</HeadlineSmall>
                {subscriptions.length > 0 ? (
                  <Box>
                    <Box mb='2'>
                      <BodyMedium color={"white"}>
                        <Text as='span' fontWeight='600' mr='1' mb='3'>Membership Plan:</Text>
                        <Text as='span' color='neutral.90'>{subscriptions[0].product.name}</Text>
                      </BodyMedium>
                    </Box>
                    <Box mb='2'>
                      <BodyMedium color={"white"}>
                        <Text as='span' fontWeight='600' mr='1' mb='3'>Monthly Fee: </Text>
                        <Text as='span' color='neutral.90'>${subscriptions[0].plan.amount / 100}</Text>
                      </BodyMedium>
                    </Box>
                      <Box mb='2'>
                      <BodyMedium color={"white"}>
                      <Text as='span' fontWeight='600' mr='1' mb='3'>Status:{" "}</Text>
                      <Text as='span' color='neutral.90'>{subscriptions[0].plan.active ? "Active" : "Deactive"}</Text>
                      </BodyMedium>
                    </Box>
                  </Box>
                
                ) : (
                  <BodyMedium color={"white"}>No Subscription.</BodyMedium>
                )}
              </Box>
              <Box position="relative" mt='16'>
                <Link href="/api/auth/logout" variant="neutralDark">
                  Logout
                </Link>
              </Box>
            </>
          )}
        </Box>
        <Footer />
      </PageContainerAccount>
    </main>
  );
}
