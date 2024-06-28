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
import { insuranceCost } from "@/app/data/insuranceData";
import { uspsShipping, fedexShipping } from "@/app/data/shippingData";
import bulkFees from '@/app/data/BulkFeeData.js';
import standardFees from '@/app/data/StandardFeeData.js';
import CardFormFields from "./CardFormFields"; // Import FormFields component
import CardOrderSummary from "./CardOrderSummary"; // Import OrderSummary component
import TitleLarge from "../typography/TitleLarge";
import BodyMedium from "../typography/BodyMedium";
import TitleMedium from "../typography/TitleMedium";
import { loadStripe } from '@stripe/stripe-js'; // Import loadStripe

function CardForm({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
  const [insurance, setInsurance] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [resetInputState, setResetInputState] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { user, isLoading } = useUser();
  const [warningMessage, setWarningMessage] = useState("");

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

  const calculateTotalDeclaredValue = () => {
    return Object.values(cartDetails)
      .reduce((total, item) => total + parseInt(item.product_data.value), 0)
      .toFixed(2);
  };

  const calculatePrice = (declaredValue, subscriptionLevel, numberOfCards) => {
    const fees = activeTab == 0 ? standardFees : bulkFees;
    if (!fees) {
      console.error("Fees data is not available");
      return null;
    }
    const levels = Object.keys(fees)
      .map(parseFloat)
      .sort((a, b) => a - b);
    const levelIdx = levels.findIndex((level) => declaredValue <= level);
    const level = levels[levelIdx === -1 ? levels.length - 1 : levelIdx];
    const levelString = level.toString();

    if (fees[levelString] && fees[levelString][subscriptionLevel]) {
      return fees[levelString][subscriptionLevel];
    } else {
      return null;
    }
  };

  const calculateShippingCost = (numberOfItems, declaredValue) => {
    const shippingRates = declaredValue >= 1500 ? fedexShipping : uspsShipping;
    let remainingItems = numberOfItems;
    let totalCost = 0;

    while (remainingItems > 0) {
      if (remainingItems <= shippingRates.smallBox.capacity) {
        totalCost += shippingRates.smallBox.cost;
        remainingItems -= shippingRates.smallBox.capacity;
      } else if (remainingItems <= shippingRates.mediumBox.capacity) {
        totalCost += shippingRates.mediumBox.cost;
        remainingItems -= shippingRates.mediumBox.capacity;
      } else {
        totalCost += shippingRates.largeBox.cost;
        remainingItems -= shippingRates.largeBox.capacity;
      }
    }

    return totalCost.toFixed(2);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const declaredValue = calculateTotalDeclaredValue();
      const insuranceCostValue = getInsuranceCost(declaredValue);
      setInsurance(insuranceCostValue);

      const numberOfItems = Object.keys(cartDetails).length;
      const shippingCostValue = calculateShippingCost(numberOfItems, declaredValue);
      setShippingCost(shippingCostValue);
    }
  }, [cartDetails]);

  function getInsuranceCost(declaredValue) {
    declaredValue = Math.ceil(declaredValue / 100) * 100;
    if (insuranceCost.hasOwnProperty(declaredValue.toString())) {
      return insuranceCost[declaredValue.toString()].Cost;
    } else {
      return null;
    }
  }

  const calculateTotalPriceWithShippingAndInsurance = () => {
    const totalDeclaredValue = calculateTotalDeclaredValue();
    const insuranceCostValue = getInsuranceCost(totalDeclaredValue);
    const numberOfItems = Object.keys(cartDetails).length;
    const shippingCostValue = calculateShippingCost(numberOfItems, totalDeclaredValue);
    const total = parseFloat(formattedTotalPrice.replace(/[^0-9.-]+/g, "")) +
      (insuranceCostValue ? insuranceCostValue : 0) +
      (shippingCostValue ? parseFloat(shippingCostValue) : 0);
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
      const numberOfCards = Object.keys(cartDetails).length + 1;
      const price = calculatePrice(declaredValue, subscriptionLevel, numberOfCards);
  
      if (price === null) {
        alert("Error calculating price.");
        return;
      }
  
      const insuranceCostValue = getInsuranceCost(declaredValue);
      const product = {
        name,
        description: desc,
        id: "prod_" + new Date().getTime(),
        price: price * 100,
        currency: "USD",
        metadata: {
          insuranceCost: insuranceCostValue,
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
  
      console.log("Updated cartDetails:", cartDetails);
  
      // Clear form fields
      setName("");
      setBrandSet("");
      setYear("");
      setNumber("");
      setDesc("");
      setValue("");
      setSlabStyle("");
  
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
  


  useEffect(() => {
    if (cartUpdated) {
      setCartUpdated(false);
    }
  }, [cartUpdated, cartDetails]);


  useEffect(() => {
    setIsClient(true);
  }, []);


  useEffect(() => {
    if ((name && brandSet && year) && (number || desc)) {
      const query = `${year} ${brandSet} ${name} ${number} ${desc}`;
      const url = `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(query)}&LH_Sold=1`;
      setEbayUrl(url);
    } else {
      console.log('Missing information:', { name, brandSet, year, number, desc });
    }
  }, [name, brandSet, year, number, desc]);


  // handleCheckout
  const handleCheckout = async () => {
    console.log('handleCheckout triggered');
  
    setLoading(true);
    setError(null);
  
    const numberOfCards = Object.keys(cartDetails).length;
  
    if (currentForm === "bulk" && numberOfCards < 10) {
      setWarningMessage("There is a 10 card minimum for bulk orders");
      setLoading(false);
      return;
    }
  
    try {
      const customerRes = await fetch(`/api/stripe/customer?email=${user.email}`);
      const customerData = await customerRes.json();
  
      const declaredValue = calculateTotalDeclaredValue();
      const shippingCost = calculateShippingCost(numberOfCards, declaredValue);
      const totalOrderCost = parseFloat(formattedTotalPrice.replace(/[^0-9.-]+/g, "")) + parseFloat(shippingCost);
  
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


  // Test Comment

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
        <BodyMedium>Call us 440-444-0404 or <Link href='page/contact' variant='primaryLightText' size='mdText'> use our contact form </Link> 
          to send questions and feedback.
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
          pb="16"
          borderRadius="20"
        >
          <CardOrderSummary
            cartCount={cartCount}
            calculateTotalDeclaredValue={calculateTotalDeclaredValue}
            formattedTotalPrice={formattedTotalPrice}
            shippingCost={shippingCost}
            insurance={insurance}
            calculateTotalPriceWithShippingAndInsurance={calculateTotalPriceWithShippingAndInsurance}
            handleCheckout={handleCheckout}
            cartDetails={cartDetails}
            clearCart={clearCart}
            handleRemoveItem={handleRemoveItem}
            warningMessage={warningMessage} 
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

    </>


  );
};

export default CardForm;