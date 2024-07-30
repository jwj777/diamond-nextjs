'use client'
import {
  Grid,
  GridItem,
  Box,
  Button,
  Link,
  Tabs,
  TabList,
  TabPanel,
  Tab,
  TabPanels,
  Text,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useShoppingCart } from "use-shopping-cart";
import CardFormFields from "./CardFormFields"; // Import FormFields component
import CardOrderSummary from "./CardOrderSummary"; // Import OrderSummary component
import TitleLarge from "../typography/TitleLarge";
import BodyMedium from "../typography/BodyMedium";
import TitleMedium from "../typography/TitleMedium";
import { loadStripe } from '@stripe/stripe-js'; // Import loadStripe


function CardForm({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isExceedingOpen, onOpen: onExceedingOpen, onClose: onExceedingClose } = useDisclosure();
  const [subscriptions, setSubscriptions] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [pendingTabIndex, setPendingTabIndex] = useState(null);
  const [currentForm, setCurrentForm] = useState("standard");
  const {
    addItem,
    cartDetails,
    clearCart,
    cartCount,
    formattedTotalPrice,
    removeItem,
  } = useShoppingCart();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartUpdated, setCartUpdated] = useState(false);
  const [name, setName] = useState("");
  const [brandSet, setBrandSet] = useState("");
  const [year, setYear] = useState("");
  const [number, setNumber] = useState("");
  const [desc, setDesc] = useState("");
  const [value, setValue] = useState("");
  const [slabStyle, setSlabStyle] = useState("");
  const [ebayUrl, setEbayUrl] = useState("");
  const [shippingCost, setShippingCost] = useState(0.00);
  const [selectedShippingOption, setSelectedShippingOption] = useState('2day');
  const [resetInputState, setResetInputState] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { user, isLoading } = useUser();
  const [warningMessage, setWarningMessage] = useState("");
  const [isExceedingLimit, setIsExceedingLimit] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  useEffect(() => {
    console.log(activeTab)
  })

  useEffect(() => {
    setLoading(true);
    async function fetchSubscriptions() {
      try {
        const customerRes = await fetch(`/api/stripe/customer?email=${user.email}`);
        const customerData = await customerRes.json();
        const response = await fetch(`/api/stripe/subscriptions?customerId=${customerData.id}`);
        const data = await response.json();
        setSubscriptions(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    fetchSubscriptions();
  }, [user, isLoading]);


  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };


  const calculateTotalDeclaredValue = () => {
    return Object.values(cartDetails)
      .reduce((total, item) => total + parseInt(item.product_data.value), 0)
      .toFixed(2);
  };

  const totalDeclaredValue = calculateTotalDeclaredValue();


  const calculatePrice = (declaredValue, subscriptionLevel, isBulk) => {
    let price;
  
    if (isBulk) {
      switch (subscriptionLevel) {
        case 'Standard':
          declaredValue < 500 ? price = 18 : price = declaredValue * 0.035
          break;
        case 'Club':
          declaredValue < 500 ? price = 16 : price = declaredValue * 0.032;
          break;
        case 'Diamond Premium':
          declaredValue < 500 ? price = 14 : price = declaredValue * 0.029;
          break;
        case "Dealer's":
          declaredValue < 500 ? price = 12 : price = declaredValue * 0.026;
          break;
        default:
          console.error("Invalid subscription level");
          return null;
      }
    } else {
      switch (subscriptionLevel) {
        case 'Standard':
          // declaredValue < 500 ? price = 20 : price = declaredValue * 0.04
          declaredValue < 500 ? price = 16 : price = declaredValue * 0.034;
          break;
        case 'Diamond Club':
          declaredValue < 500 ? price = 18 : price = declaredValue * 0.037;
          break;
        case 'Diamond Premium':
          declaredValue < 500 ? price = 16 : price = declaredValue * 0.034;
          break;
        case "Dealers Club":
          declaredValue < 500 ? price = 14 : price = declaredValue * 0.031;
          break;
        default:
          console.error("Invalid subscription level standard");
          console.log("subscriptionLevel --- ", subscriptionLevel )
          return null;
      }
    }
  
    return price.toFixed(2);
  };

  const getDefaultShippingOption = (declaredValue) => {
    return declaredValue < 500 ? 'usps' : '2day';
  };

  const calculateShippingCost = (numberOfItems, declaredValue, option = '2day') => {
    if (declaredValue <= 500) {
      // USPS Priority
      if (option === 'usps') {
        if (numberOfItems >= 1 && numberOfItems <= 4) {
          return 15;
        } else if (numberOfItems >= 5 && numberOfItems <= 20) {
          return 25;
        }
      }
      // FedEx Standard 2-Day or Overnight
      const fedexRates = [
        { range: [1, 9], standard: 20, overnight: 75 },
        { range: [10, 20], standard: 25, overnight: 85 },
        { range: [21, 40], standard: 30, overnight: 95 },
        { range: [41, 75], standard: 40, overnight: 115 },
      ];
  
      for (const rate of fedexRates) {
        if (numberOfItems >= rate.range[0] && numberOfItems <= rate.range[1]) {
          return option === 'overnight' ? rate.overnight : rate.standard;
        }
      }
    } else {
      // FedEx Standard 2-Day or Overnight for values over $500
      const fedexRates = [
        { range: [1, 9], standard: 20, overnight: 75 },
        { range: [10, 20], standard: 25, overnight: 85 },
        { range: [21, 40], standard: 30, overnight: 95 },
        { range: [41, 75], standard: 40, overnight: 115 },
      ];
  
      for (const rate of fedexRates) {
        if (numberOfItems >= rate.range[0] && numberOfItems <= rate.range[1]) {
          return option === 'overnight' ? rate.overnight : rate.standard;
        }
      }
    }
    return 0;
  };
  

  const updateShippingCost = (option) => {
    const numberOfItems = Object.keys(cartDetails).length;
    const declaredValue = calculateTotalDeclaredValue();
    const shippingCostValue = calculateShippingCost(numberOfItems, declaredValue, option);
    setShippingCost(shippingCostValue);
  };


  useEffect(() => {
    const declaredValue = calculateTotalDeclaredValue();
    const defaultOption = getDefaultShippingOption(declaredValue);
    setSelectedShippingOption(defaultOption);
    updateShippingCost(defaultOption);
  }, [cartDetails]);


  const calculateTotalPriceWithShipping = () => {
    const total = parseFloat(formattedTotalPrice.replace(/[^0-9.-]+/g, "")) +
      (shippingCost ? parseFloat(shippingCost) : 0);
    return total.toFixed(2);
  };


  // addToCart Function
  const addToCart = async (e) => {
    e.preventDefault();
    try {
      if (!subscriptions.length) {
        alert("Please subscribe to the membership first.");
        return;
      }
      if (!name || !brandSet || !year || !number || !value || !slabStyle) {
        alert("Please input all fields.");
        return;
      }
  
      const subscriptionLevel = subscriptions[0].product.name;
      const declaredValue = parseFloat(value);
      const isBulk = activeTab !== 0; // Assuming 0 is the index for standard orders
      const price = calculatePrice(declaredValue, subscriptionLevel, isBulk);

      console.log('subscriptionLevel #### ', subscriptionLevel)
  
      if (price === null) {
        alert("Error calculating price.");
        return;
      }


      const product = {
        name,
        description: desc,
        id: "prod_" + new Date().getTime(),
        price: price * 100,
        currency: "USD",
        metadata: {
          year,
          brandSet,
          number,
          desc,
          value,
          slabStyle,
        },
      };
  
      console.log("Adding product:", product);
  
      addItem(product, {
        product_metadata: { year, brandSet, number, desc, value, slabStyle },
      });
  
      // Clear warning message
      setWarningMessage("");
  
      // Trigger reset state
      setResetInputState(true);
      setTimeout(() => setResetInputState(false), 0);
  
      setCartUpdated(true);
    } catch (error) {
      console.error("Error adding item to cart:", error);
      alert("There was an error adding the item to the cart.");
    }
  };

  const isCartEmpty = () => {
    return Object.keys(cartDetails).length === 0;
  };
  
  useEffect(() => {
    if (cartUpdated) {
      setCartUpdated(false);
    }
  }, [cartUpdated, cartDetails]);


  useEffect(() => {
    setIsClient(true);
  }, []);


  useEffect(() => {
    if (totalDeclaredValue > 50000) {
      setIsExceedingLimit(true);
      onExceedingOpen();
    } else {
      setIsExceedingLimit(false);
      onExceedingClose();
    }
  }, [totalDeclaredValue, onExceedingOpen, onExceedingClose]);


  useEffect(() => {
    if ((name && brandSet && year) && (number || desc)) {
      const query = `${year} ${brandSet} ${name} ${number} ${desc}`;
      const url = `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(query)}&LH_Sold=1`;
      setEbayUrl(url);
    } else {
      // console.log('Missing information:', { name, brandSet, year, number, desc });
    }
  }, [name, brandSet, year, number, desc]);


  const formatCartDetails = (cartDetails) => {
    return Object.values(cartDetails)
      .map((item, index) => {
        return `Card ${index + 1}:
          Name: ${item.product_data.year} ${item.product_data.brandSet} ${item.name}
          Number: ${item.product_data.number}
          Description: ${item.product_data.desc}
          Declared Value: $${item.product_data.value}
          Slab Style: ${item.product_data.slabStyle}`;
      })
      .join('\n\n');
  };


  // sendToWebhook function
  const sendToWebhook = async (data) => {
    try {
      console.log('Sending the following data to webhook:', data); // Log the data to verify
      const response = await fetch('https://hooks.zapier.com/hooks/catch/8026392/2b1epr8/', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send data to webhook');
      }

      console.log('Data sent to webhook successfully');
    } catch (error) {
      console.error('Error sending data to webhook:', error);
    }
  };


  // handleCheckout
  const handleCheckout = async () => {

    const numberOfCards = Object.keys(cartDetails).length;

    if (currentForm === "bulk" && numberOfCards < 10) {
      alert("A bulk order must contain 10 or more cards.");
      return;
    }

    if (totalDeclaredValue > 100000) {
      setIsExceedingLimit(true);
      onOpen();
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const customerRes = await fetch(`/api/stripe/customer?email=${user.email}`);
      const customerData = await customerRes.json();

      const numberOfCards = Object.keys(cartDetails).length;
      const declaredValue = calculateTotalDeclaredValue();
      const shippingCost = calculateShippingCost(numberOfCards, declaredValue);
      const totalOrderCost = parseFloat(formattedTotalPrice.replace(/[^0-9.-]+/g, "")) + parseFloat(shippingCost);

      const formattedCartDetails = formatCartDetails(cartDetails); // Get formatted cart details

      const orderData = {
        customer: customerData.id,
        cartDetails: formattedCartDetails, // Use the formatted cart details string
        totalOrderCost,
        shippingCost,
        declaredValue,
      };
  
      await sendToWebhook(orderData);

      console.log('orderData ', orderData)

      const response = await fetch("/api/stripe/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartDetails, customerId: customerData.id, totalOrderCost }),
      });

      const data = await response.json();
      if (data.sessionId) {
        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
        clearCart();
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


  const handleTermsAndConditions = (value) => {
    setAgreeToTerms(value);
  }

  const handleRemoveItem = (id) => {
    console.log("handleRemoveItem called with id: ", id);
    removeItem(id);
  };


  const clearFormFields = () => {
    setName("");
    setBrandSet("");
    setYear("");
    setNumber("");
    setDesc("");
    setValue("");
    setSlabStyle("");
    setEbayUrl("");
  };


  const handleTabChange = (index) => {
    if (Object.keys(cartDetails).length > 0) {
      setPendingTabIndex(index);
      onOpen();
    } else {
      setActiveTab(index);
      setCurrentForm(index === 0 ? "standard" : "bulk");
    }
  };


  const confirmTabChange = () => {
    clearCart();
    setWarningMessage("")
    setActiveTab(pendingTabIndex);
    setCurrentForm(pendingTabIndex === 0 ? "standard" : "bulk");
    onClose();
  };


const handleShippingOptionChange = (option) => {
  setSelectedShippingOption(option);
  updateShippingCost(option);
};


  return (
    <>
    <Grid templateColumns="repeat(4, 1fr)">
      <GridItem
        colSpan={2}
        maxW="680px"
        mb="16"
        mt='24'
        mr='4' 
        bg="neutral.95"
        
        pb="16"
        borderRadius="20"
      >
      <Tabs variant='neutralLight' onChange={handleTabChange} index={activeTab} >
        <TabList mb='4'>
          <Tab textAlign={'left'}>
            <Text fontWeight='600'>Standard Order <Text fontWeight='400' as='span'>{'(1-9 Cards)'}</Text></Text>
          </Tab>
          <Tab>
            <Text fontWeight='600'>Bulk Order <Text fontWeight='400' as='span'>{'(10 or More)'}</Text></Text>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel pl="10">


              <Box>
                <Box mb='6'>
                  <TitleLarge color="neutral.10">
                    Standard Order Form
                  </TitleLarge>
                  <BodyMedium color="neutral.10">
                    {data?.attributes?.Form_Subheading}
                  </BodyMedium>
                </Box>
                <Box mb='10'>
                  <Link variant='primaryLightText' size='mdText' onClick={clearFormFields}>Clear Form Fields</Link>
                </Box>
              </Box>

              <Box>
                <CardFormFields
                  name={name}
                  setName={setName}
                  brandSet={brandSet}
                  setBrandSet={setBrandSet}
                  year={year}
                  setYear={setYear}
                  number={number}
                  setNumber={setNumber}
                  desc={desc}
                  setDesc={setDesc}
                  value={value}
                  setValue={setValue}
                  slabStyle={slabStyle}
                  setSlabStyle={setSlabStyle}
                />
                <Box mt="4">
                  {ebayUrl ? (
                    <Link
                      href={ebayUrl}
                      isExternal
                      variant="primaryLightText"
                      size="mdText"
                    >
                      See {year + " " + brandSet + " " + name + " " + number} examples on eBay
                    </Link>
                  ) : null}
                </Box>
              </Box>

              <Button
                mt="4"
                size={{ base: "md", md: "lg" }}
                type="submit"
                variant="primaryLight"
                onClick={addToCart}
              >
                {"Add to Order"}
              </Button>
      
          </TabPanel>
          <TabPanel pl="10">

            <Box>

              <Box mb='6'>
                <TitleLarge color="neutral.10">
                  Bulk Order Form
                </TitleLarge>
                <BodyMedium color="neutral.10">
                  Enter 10 or more items to receive bulk order discounts.
                </BodyMedium>
              </Box>

              <Box mb='10'>
              <Link variant='primaryLightText' size='mdText' onClick={clearFormFields}>Clear Form Fields</Link>
              </Box>

            </Box>

              <Box>
                <CardFormFields
                  name={name}
                  setName={setName}
                  brandSet={brandSet}
                  setBrandSet={setBrandSet}
                  year={year}
                  setYear={setYear}
                  number={number}
                  setNumber={setNumber}
                  desc={desc}
                  setDesc={setDesc}
                  value={value}
                  setValue={setValue}
                  slabStyle={slabStyle}
                  setSlabStyle={setSlabStyle}
                />
                <Box mt="4">
                  {ebayUrl ? (
                    <Link
                      href={ebayUrl}
                      isExternal
                      variant="primaryLightText"
                      size="mdText"
                    >
                      See {year + " " + brandSet + " " + name + " " + number} examples on eBay
                    </Link>
                  ) : null}
                </Box>
              </Box>

              <Button
                mt="4"
                size={{ base: "md", md: "lg" }}
                type="submit"
                variant="primaryLight"
                onClick={addToCart}
              >
                {"Add to Order"}
              </Button>
           
          </TabPanel>
        </TabPanels>
      </Tabs>
      
      <Box mt='8' px='10' maxW='480px'>
        <TitleMedium>Feedback and Support</TitleMedium>
        <BodyMedium>If you have any questions or want to provide feedback, <Link href='/page/contact' variant='primaryLightText' size='mdText'> use our contact form </Link>.
        </BodyMedium>
      </Box>

      </GridItem>

      {isClient && (
        <GridItem
          colSpan={2}
          maxW="680px"
          mt="24"
          mb="20"
          mx="2"
          bg="neutral.95"
          p="10"
          pt='8'
          pb="16"
          borderRadius="20"
        >
          <CardOrderSummary
            cartCount={formatNumberWithCommas(cartCount)}
            calculateTotalDeclaredValue={() => formatNumberWithCommas(calculateTotalDeclaredValue())}
            declaredValue={totalDeclaredValue}
            formattedTotalPrice={formatNumberWithCommas(formattedTotalPrice)}
            shippingCost={shippingCost}
            calculateTotalPriceWithShipping={calculateTotalPriceWithShipping}
            handleCheckout={handleCheckout}
            cartDetails={cartDetails}
            clearCart={clearCart}
            handleRemoveItem={handleRemoveItem}
            warningMessage={warningMessage}
            selectedShippingOption={selectedShippingOption}
            handleShippingOptionChange={handleShippingOptionChange}
            handleTermsAndConditions={handleTermsAndConditions}
            agreeToTerms={agreeToTerms}
          />
        </GridItem>
      )}
    </Grid>

    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Confirm Form Switch</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Switching forms will delete current cart items. Do you want to proceed?</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={confirmTabChange}>
            Yes
          </Button>
          <Button onClick={onClose}>No</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>

    <Modal closeOnOverlayClick={false} isOpen={isExceedingOpen} onClose={onExceedingClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Declared Value Maximum Exceeded</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              The total declared value of your cart exceeds the maximum of $50,000. Contact us about this order so we can provide more personalized services. 
            </Text>
          </ModalBody>
          <ModalFooter>
            <Link href="/page/contact" mr='4'>Contact Us</Link>
            <Link onClick={onClose}>Close</Link>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>


  );
};

export default CardForm;