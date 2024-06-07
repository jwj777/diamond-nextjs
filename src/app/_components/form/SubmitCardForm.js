"use client";
import {
  Box,
  Image,
  Text,
  Button,
  Select,
  InputGroup,
  InputLeftElement,
  Grid,
  GridItem,
  Icon,
  Tooltip
} from "@chakra-ui/react";
import TitleLarge from "../typography/TitleLarge";
import BodyMedium from "../typography/BodyMedium";
import { useState, useEffect } from "react";
import { fees, prices } from "@/app/priceData";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useShoppingCart } from "use-shopping-cart";
import { loadStripe } from "@stripe/stripe-js";
import InputFloatLight from "./inputFloatLight";
import InputFloatWithPrefix from "./InputFloatPrefix";
import { Link } from "@chakra-ui/next-js";
import { MdDelete } from "react-icons/md";
import LabelMedium from "../typography/LabelMedium";

export default function SubmitCardForm({ data }) {
  const [subscriptions, setSubscriptions] = useState([]);
  const { addItem, cartDetails, clearCart, cartCount, formattedTotalPrice, removeItem } =
    useShoppingCart();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartUpdated, setCartUpdated] = useState(false);

  const [formSubmit, setFormSubmit] = useState(false);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState();
  const [number, setNumber] = useState();
  const [desc, setDesc] = useState("");
  const [value, setValue] = useState();
  const [ebayUrl, setEbayUrl] = useState("");
  const { user, isLoading } = useUser();


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

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    fetchSubscriptions();
  }, [user, isLoading]);


  const addToCart = async () => {
    console.log("Add to cart clicked");

    if(!subscriptions.length) {
      alert("Please subscribe the membership first.");
      return;
    }
    if (!name || !brand || !year || !number || !value) {
      alert("Please input all fields.");
      return;
    }
    const levels = Object.keys(fees);
    const levelIdx =
      levels.findIndex((item) => parseInt(item) > parseInt(value)) - 1;
    const level = levels[levelIdx];
    let price = 0;
    if (levelIdx < 0) {
      price = parseInt(value);
    } else {
      const fee = fees[level][subscriptions[0].product.name];
      price =
        prices[level][subscriptions[0].product.name] * 100 +
        fee * (parseInt(value) - parseInt(level));
    }

    const product = {
      name,
      description: desc,
      id: "prod_Q90vXwIVPSesQV" + new Date().getTime(),
      price,
      currency: "USD",
    };

    console.log("Product to be added:", product);
    console.log("Cart details before adding:", cartDetails);


    addItem(product, {
      product_metadata: { year, brand, number, value },
    });
    console.log("Cart details after adding:", cartDetails);
    setCartUpdated(true);
  };


  useEffect(() => {
    if (cartUpdated) {
      console.log("Cart details after adding:", cartDetails);
      setCartUpdated(false);
    }
  }, [cartUpdated, cartDetails]);


  useEffect(() => {
    if (name && brand && year && number) {
      const query = `${year} ${brand} ${name} ${number}`;
      const url = `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(query)}`;
      setEbayUrl(url);
    }
  }, [name, brand, year, number]);


  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    try {
      const customerRes = await fetch(
        `/api/stripe/customer?email=${user.email}`
      );
      const customerData = await customerRes.json();

      const response = await fetch("/api/stripe/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartDetails, customerId: customerData.id }),
      });

      const data = await response.json();
      if (data.sessionId) {
        const stripe = await loadStripe(
          process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
        );
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


  const calculateTotalDeclaredValue = () => {
    return Object.values(cartDetails).reduce((total, item) => {
      return total + parseInt(item.product_data.value);
    }, 0);
  };


  const handleRemoveItem = (id) => {
    console.log("handleRemoveItem called with id: ", id)
    removeItem(id);
  };


  return (
    <Grid templateColumns="repeat(4, 1fr)">
      <GridItem
        colSpan={2}
        maxW="680px"
        mt="24"
        mb="16"
        mx="2"
        bg="neutral.95"
        p="10"
        pb="16"
        borderRadius="20"
      >
        <Box mb="8">
          <TitleLarge color="neutral.10">
            {data?.attributes?.Form_Heading}
          </TitleLarge>
          <BodyMedium color="neutral.10">
            {data?.attributes?.Form_Subheading}
          </BodyMedium>
        </Box>

        <Box>
          <Box mr="4" minW="160px">
            <InputFloatLight
              label="Player Name"
              id={"playername"}
              type={"text"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={true}
            />
          </Box>
          <Box
            display="flex"
            flex="wrap"
            alignItems="center"
            flexDirection={{ base: "column", md: "row" }}
            required={true}
          >
            <Box mb="4" mr="4" minW="180px" h="16">
              <Select
                placeholder="Card Brand"
                bg="neutral.90"
                borderColor='neutral.80'
                fontSize="1.2rem"
                fontWeight='500'
                h="16"
                borderRadius="8"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                <option value="Topps">Topps</option>
                <option value="Panini">Panini</option>
                <option value="Upper Deck">Upper Deck</option>
                <option value="Bowman">Bowman</option>
                <option value="Fleer">Fleer</option>
                <option value="Donruss">Donruss</option>
                <option value="Score">Score</option>
                <option value="Other">Other</option>
              </Select>
            </Box>

            <Box mr="4" minW="130px">
              <InputFloatLight
                label="Card Year"
                id={"cardyear"}
                type={"text"}
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required={true}
              />
            </Box>
            <Box mr="4" minW="130px">
              <InputFloatLight
                label="Card #"
                id={"cardnumber"}
                type={"text"}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required={true}
              />
            </Box>
          </Box>

          <Box mr="4" minW="160px">
            <InputFloatLight
              label="Description/Parallel/Variation"
              id={"description"}
              type={"text"}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required={true}
            />
          </Box>

          <Box mr="4" minW="160px">
            <InputFloatWithPrefix
              label="Declared Value"
              id={"declaredValue"}
              type={"text"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required={true}
            />
          </Box>


        </Box>

        <Button
          mt="8"
          size={{ base: "md", md: "lg" }}
          type="submit"
          py="7"
          bg="primary.40"
          color="neutral.100"
          borderRadius="64"
          _hover={{
            bg: "neutral.20",
          }}
          onClick={(e) => addToCart()}
        >
          {"Add to Order"}
        </Button>

        <Box mt="8">
          {ebayUrl ? (
            <Link href={ebayUrl} isExternal variant='primaryLightText' size='mdText'>
              See {year + ' ' + brand + ' ' + name + ' ' + number} examples on eBay
            </Link>
          ) : (
            null
          )}
        </Box>

      </GridItem>

      <GridItem
        colSpan={2}
        maxW="680px"
        mt="24"
        mb="16"
        mx="2"
        bg="neutral.95"
        p="10"
        pb="16"
        borderRadius="20"
      >
        <Box mb="8">
          <TitleLarge color="neutral.10">Order Summary</TitleLarge>
          <Box mb="6" p="7" bg="neutral.90" borderRadius='1rem'>
            <Box display={"flex"} justifyContent={"space-between"}>
              <LabelMedium>Total Items:</LabelMedium>
              <b>{cartCount}</b>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <LabelMedium>Total Declared Value:</LabelMedium>
              <b>${calculateTotalDeclaredValue()}</b>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <LabelMedium>Grading Fees:</LabelMedium>
              <b>{formattedTotalPrice}</b>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <LabelMedium>Shipping & Insurance:</LabelMedium>
              <b>{0}</b>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <LabelMedium>Order Total:</LabelMedium>
              <b>{formattedTotalPrice}</b>
            </Box>
          </Box>
          <Button
            size={{ base: "md", md: "lg" }}
            // variant="primaryLight"
            type="submit"
            py="7"
            bg="primary.40"
            color="neutral.100"
            borderRadius="64"
            _hover={{
              bg: "neutral.20",
            }}
            onClick={(e) => handleCheckout()}
          >
            {"Place Your Order"}
          </Button>
        </Box>

        <Box mb="8">
          <Box display='flex' justifyContent='space-between' mb='2'>
            <TitleLarge color="neutral.10">Items In Order</TitleLarge>
            <Link
              href="#"
              alt=""
              variant="primaryLightText"
              type="submit"
              onClick={(e) => clearCart()}
            >
              {"Clear the Cart"}
            </Link>
          </Box>
          
          <Box mb="5" mx="2" p="7" bg="neutral.90" borderRadius="1rem">
          {Object.keys(cartDetails).length ? (
            <>
              {Object.keys(cartDetails).map((item, index) => (
                <Box
                  key={index}
                  bg="white"
                  p='4'
                  mb='2'
                  borderRadius="0.8rem"
                  // shadow="md"
                >
                  <Box display={"flex"} justifyContent={"space-between"} alignItems='center'>
                    <LabelMedium mb='1'>{ 
                        `${cartDetails[item].product_data.year} 
                        ${cartDetails[item].product_data.brand} 
                        ${cartDetails[item].name} #${cartDetails[item].product_data.number}`
                      }
                    </LabelMedium>

                      <Link
                        href="#/"
                        onClick={() => handleRemoveItem(cartDetails[item].id)}
                        color="red.500"
                        variant='noDeco'
                        size='mdText'
                        ml="4"
                      >
                        <Icon
                          as={MdDelete}
                          w='6'
                          h='6'
                          color='primary.40'
                        />
                      </Link>

                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <LabelMedium>Declared Value:</LabelMedium> 
                    <BodyMedium>${cartDetails[item].product_data.value}</BodyMedium>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <LabelMedium>Grading Fee:</LabelMedium> 
                    <BodyMedium>{cartDetails[item].formattedValue}</BodyMedium>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <LabelMedium>Shipping & Insurance:</LabelMedium> 
                    <BodyMedium>{0}</BodyMedium>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <LabelMedium>Total:</LabelMedium> 
                    <BodyMedium>{cartDetails[item].formattedValue}</BodyMedium>
                  </Box>
                </Box>
              ))}
            </>
          ) : (
            <Text>No Items</Text>
          )}
          </Box>

        </Box>
      </GridItem>
    </Grid>
  );
}