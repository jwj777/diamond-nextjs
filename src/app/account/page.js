"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Box, Link, Spinner, Switch, Text } from "@chakra-ui/react";
import TitleLarge from "@/app/_components/typography/TitleLarge";
import PageContainerAccount from "@/app/_layout/PageContainerAccount";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import BodyMedium from "../_components/typography/BodyMedium";
import Footer from "../_layout/footer/Footer";
import XlContainer from "../_layout/containers/XlContainer";
import TitleMedium from "../_components/typography/TitleMedium";
import TitleSmall from "../_components/typography/TitleSmall";
import LabelSmall from "../_components/typography/LabelSmall";

export default function ProfileClient() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    if (!isLoading && !user) {
      return redirect("/");
    }
    if (!user) return;
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
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    fetchSubscriptions();
  }, [user, isLoading]);


  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
      try {
        const response = await fetch(`/api/auth/get-metadata?userId=${user.sub}`);
        const { isSubscribed } = await response.json();
        setIsSubscribed(isSubscribed);
      } catch (error) {
        console.error("Error fetching subscription status:", error);
      }
    };

    if (user) {
      fetchSubscriptionStatus();
    }
  }, [user]);


  const handleNewsletterToggle = async (event) => {
    const isChecked = event.target.checked;
    setIsSubscribed(isChecked);
  
    const status = isChecked ? "opt-in" : "opt-out";
  
    try {
      const response = await fetch("/api/zapier-newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email, status }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to update subscription status.");
      }
  
      console.log(
        isChecked
          ? "User opted in and data sent to Zapier successfully."
          : "User opted out and data sent to Zapier successfully."
      );
    } catch (error) {
      console.error("Error sending data to Zapier:", error);
    }
  };
  
  
  return (
    <main>
      <PageContainerAccount data={{ user }}>
        <XlContainer>
          {isLoading || loading ? (
            <Box display="flex" justifyContent="center" pt="24" pb="24">
              <Box textAlign={'center'}>
                <Spinner color="primary.80" emptyColor="neutral.30" size="xl" mb="2" />
                <BodyMedium color="primary.80">Loading...</BodyMedium>
              </Box>
            </Box>
          ) : (  
            <Box mt='8'>
              <TitleLarge color='neutral.90'>My Account</TitleLarge>
              <Box 
                display='flex' 
                flexWrap='wrap'
                justifyContent='space-between'
                alignItems='baseline'
                mt='8'
              >
                <Box 
                  display='flex'
                  flexDir='column'
                  alignContent='normal'
                  position="relative" 
                  mr='8'
                >
                  <Box 
                    position="relative" 
                    bg='neutral.20' 
                    p={{ base: '6', sm: '8'}} 
                    pr={{ base: '6', sm: '12' }} 
                    borderRadius='1rem'
                  >
                    <Box mb='4'>
                      <TitleSmall mr='1' mb='1' color='neutral.90'>Email</TitleSmall>
                      <BodyMedium color='neutral.80'>{user.email}</BodyMedium>
                    </Box>
                    <Box mb='4'>
                      <TitleSmall mr='1' mb='1' color='neutral.90'>Username</TitleSmall>
                      <BodyMedium color='neutral.80'>{user.nickname}</BodyMedium>
                    </Box>
                    <Box mt='8'>
                      <BodyMedium color='neutral.90' >Request Order Status</BodyMedium>
                      <Link href="mailto:support@diamondgradecards.com" variant='primaryDarkText' size='mdText'>support@diamondgradecards.com</Link>
                    </Box>
                  </Box>
                  <Box 
                    display='inline-block' 
                    position="relative" 
                    mt='8' 
                    mb='8'
                    bg='neutral.20' 
                    p='8' 
                    pr='12'
                    borderRadius='1rem'
                  >
                    <TitleSmall color='neutral.90'>Membership Details</TitleSmall>
                    {subscriptions.length > 0 ? (
                      <Box mt='1'>
                        <Box mb='2'>
                          <BodyMedium color={"white"}>
                            <Text as='span' fontWeight='600' mr='1' mb='3'>Membership Plan:</Text>
                            <Text as='span' color='neutral.90'>{subscriptions[0].product.name}</Text>
                          </BodyMedium>
                        </Box>
                        <Box mb='2'>
                          <BodyMedium color={"white"}>
                            <Text as='span' fontWeight='600' mr='1' mb='3'>Yearly Fee: </Text>
                            <Text as='span' color='neutral.90'>${subscriptions[0].plan.amount / 100}</Text>
                          </BodyMedium>
                        </Box>
                          <Box mb='2'>
                          <BodyMedium color={"white"}>
                          <Text as='span' fontWeight='600' mr='1' mb='3'>Status:{" "}</Text>
                          <Text as='span' color='neutral.90'>{subscriptions[0].plan.active ? "Active" : "Deactive"}</Text>
                          </BodyMedium>
                        </Box>
                        <Box mt='4'>
                          <Link href='/page/pricing' variant='primaryDarkText' size='mdText'>Upgrade Plan</Link>
                        </Box>
                      </Box>
                    
                    ) : (
                      <Box mt='2'>
                        <BodyMedium color="neutral.80" mb='6'>No Subscription</BodyMedium>
                        <Link href='/page/pricing' variant='primaryDarkText' size='mdText'>Subscribe To a Plan</Link>
                      </Box>
                    )}
                  </Box>

                </Box>
                <Box                     
                  bg='neutral.20' 
                  borderRadius='16' 
                  p='8'
                  pr={{ base: '8', sm: '16' }}
                >
                  <TitleSmall color='neutral.90'>Subscribe To Our Newsletter</TitleSmall>
                  <Box 
                    display='flex'
                    alignItems='center'
                    mt='4'
                  >
                    <Switch   
                      colorScheme="primary"
                      mr='4'
                      isChecked={isSubscribed}
                      onChange={handleNewsletterToggle}
                      sx={{
                        "span.chakra-switch__track[data-checked]": {
                          backgroundColor: "primary.90", // Background color for the checked state
                        },
                        "span.chakra-switch__thumb": {
                          bg: "white", // White or any other color for the thumb to make it stand out
                        },
                      }}
                    />
                    <BodyMedium color='neutral.90'>{isSubscribed ? 'Subscribed' : 'Not Subscribed'}</BodyMedium>
                  </Box>
                </Box>
              </Box>
              <Box position="relative" mt='12' mb='20'>
                <Link href="/api/auth/logout" variant="neutralDark">
                  Logout
                </Link>
              </Box>
            </Box>
          )}
        </XlContainer>
        <Footer />
      </PageContainerAccount>
    </main>
  );
}
