// "use client";
// import {
//   Box,
//   Text,
//   Button,
//   Select,
//   Grid,
//   GridItem,
//   Icon,
// } from "@chakra-ui/react";
// import TitleLarge from "../typography/TitleLarge";
// import BodyMedium from "../typography/BodyMedium";
// import { useState, useEffect } from "react";
// import { useUser } from "@auth0/nextjs-auth0/client";
// import { useShoppingCart } from "use-shopping-cart";
// import { loadStripe } from "@stripe/stripe-js";
// import InputFloatLight from "./inputFloatLight";
// import InputFloatWithPrefix from "./InputFloatPrefix";
// import { Link } from "@chakra-ui/next-js";
// import { MdDelete } from "react-icons/md";
// import LabelMedium from "../typography/LabelMedium";
// import { insuranceCost } from "@/app/data/insuranceData";
// import { uspsShipping, fedexShipping } from "@/app/data/shippingData";
// import bulkFees from '@/app/data/BulkFeeData.js';
// import standardFees from '@/app/data/StandardFeeData.js';


// export default function SubmitCardForm({ data }) {
//   const [subscriptions, setSubscriptions] = useState([]);
//   const {
//     addItem,
//     cartDetails,
//     clearCart,
//     cartCount,
//     formattedTotalPrice,
//     removeItem,
//   } = useShoppingCart();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [cartUpdated, setCartUpdated] = useState(false);

//   const [name, setName] = useState("");
//   const [brand, setBrand] = useState("");
//   const [year, setYear] = useState("");
//   const [brandSet, setBrandSet] = useState("");
//   const [slabStyle, setSlabStyle] = useState("")
//   const [number, setNumber] = useState("");
//   const [desc, setDesc] = useState("");
//   const [value, setValue] = useState("");
//   const [ebayUrl, setEbayUrl] = useState("");
//   const { user, isLoading } = useUser();
//   const [insurance, setInsurance] = useState(0);
//   const [shippingCost, setShippingCost] = useState(0);
//   const [resetInputState, setResetInputState] = useState(false);
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     // if (!isLoading && !user) {
//     //   return redirect("/");
//     // }
//     setLoading(true);
//     async function fetchSubscriptions() {
//       try {
//         const customerRes = await fetch(
//           `/api/stripe/customer?email=${user.email}`
//         );
//         const customerData = await customerRes.json();

//         const response = await fetch(
//           `/api/stripe/subscriptions?customerId=${customerData.id}`
//         );
//         const data = await response.json();
//         setSubscriptions(data);

//         setLoading(false);
//       } catch (error) {
//         setLoading(false);
//       }
//     }

//     fetchSubscriptions();
//   }, [user, isLoading]);

//   const calculateTotalDeclaredValue = () => {
//     return Object.values(cartDetails)
//       .reduce((total, item) => {
//         return total + parseInt(item.product_data.value);
//       }, 0)
//       .toFixed(2);
//   };


//   const calculatePrice = (declaredValue, subscriptionLevel, numberOfCards) => {
//     const fees = numberOfCards >= 2 ? bulkFees : standardFees;
//     if (!fees) {
//       console.error("Fees data is not available");
//       return null;
//     }
//     const levels = Object.keys(fees)
//       .map(parseFloat)
//       .sort((a, b) => a - b);
//     const levelIdx = levels.findIndex((level) => declaredValue <= level);
//     const level = levels[levelIdx === -1 ? levels.length - 1 : levelIdx];
//     const levelString = level.toString();
    
//     // Check if subscription level exists at the selected level
//     if (fees[levelString] && fees[levelString][subscriptionLevel]) {
//       const price = fees[level.toString()][subscriptionLevel];
//       return price;
//     } else {
//       return null;
//     }
//   };

 
  
// const recalculateCartPrices = (subscriptionLevel, numberOfCards) => {
//     const updatedCartDetails = {};

//     Object.keys(cartDetails).forEach((itemId) => {
//       const item = cartDetails[itemId];
//       const declaredValue = parseFloat(item.product_data.value);
//       const newPrice = calculatePrice(declaredValue, subscriptionLevel, numberOfCards);
//       if (newPrice !== null) {
//         const updatedItem = {
//           ...item,
//           price: newPrice * 100, // Update the price in cents
//           formattedValue: `$${newPrice.toFixed(2)}`,
//         };
//         updatedCartDetails[itemId] = updatedItem;
//       } else {
//         updatedCartDetails[itemId] = item;
//       }
//     });

//     // clearCart(); 
//     Object.keys(updatedCartDetails).forEach((itemId) => {
//       const item = updatedCartDetails[itemId];
//       addItem(item, {
//         product_metadata: { ...item.product_data },
//       });
//     });
//   };
  

//   const calculateShippingCost = (numberOfItems, declaredValue) => {
//     const shippingRates = declaredValue >= 1500 ? fedexShipping : uspsShipping;
//     let remainingItems = numberOfItems;
//     let totalCost = 0;

//     while (remainingItems > 0) {
//       if (remainingItems <= shippingRates.smallBox.capacity) {
//         totalCost += shippingRates.smallBox.cost;
//         remainingItems -= shippingRates.smallBox.capacity;
//       } else if (remainingItems <= shippingRates.mediumBox.capacity) {
//         totalCost += shippingRates.mediumBox.cost;
//         remainingItems -= shippingRates.mediumBox.capacity;
//       } else {
//         totalCost += shippingRates.largeBox.cost;
//         remainingItems -= shippingRates.largeBox.capacity;
//       }
//     }

//     return totalCost.toFixed(2);
//   };


//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const declaredValue = calculateTotalDeclaredValue();
//       const insuranceCostValue = getInsuranceCost(declaredValue);
//       setInsurance(insuranceCostValue);

//       const numberOfItems = Object.keys(cartDetails).length;
//       const shippingCostValue = calculateShippingCost(
//         numberOfItems,
//         declaredValue
//       );
//       setShippingCost(shippingCostValue);
//     }
//   }, [cartDetails]);



//   function getInsuranceCost(declaredValue) {
//     declaredValue = Math.ceil(declaredValue / 100) * 100;

//     if (insuranceCost.hasOwnProperty(declaredValue.toString())) {
//       return insuranceCost[declaredValue.toString()].Cost;
//     } else {
//       // Handle cases where the declaredValue key doesn't exist, if needed
//       return null; // or any default value or error handling
//     }
//   }

//   const calculateTotalPriceWithShippingAndInsurance = () => {
//     const totalDeclaredValue = calculateTotalDeclaredValue();
//     const insuranceCostValue = getInsuranceCost(totalDeclaredValue);
//     const numberOfItems = Object.keys(cartDetails).length;
//     const shippingCostValue = calculateShippingCost(
//       numberOfItems,
//       totalDeclaredValue
//     );
//     const total =
//       parseFloat(formattedTotalPrice.replace(/[^0-9.-]+/g, "")) +
//       (insuranceCostValue ? insuranceCostValue : 0) +
//       (shippingCostValue ? parseFloat(shippingCostValue) : 0);
//     // console.log("t", total);
//     return total.toFixed(2);
//   };
  


//   const addToCart = async (e) => {
//     e.preventDefault();
//     if (!subscriptions.length) {
//       alert("Please subscribe the membership first.");
//       return;
//     }
//     if (!name || !brandSet || !year || !number || !value) {
//       alert("Please input all fields.");
//       return;
//     }

//     const subscriptionLevel = subscriptions[0].product.name;
//     const declaredValue = parseFloat(value);
//     const numberOfCards = Object.keys(cartDetails).length + 1;
//     const price = calculatePrice(declaredValue, subscriptionLevel, numberOfCards);

//     if (price === null) {
//       return;
//     }

//     const insuranceCostValue = getInsuranceCost(declaredValue);
//     const product = {
//       name,
//       description: desc,
//       id: "prod_Q90vXwIVPSesQV" + new Date().getTime(),
//       price: price * 100,
//       currency: "USD",
//       metadata: {
//         insuranceCost: insuranceCostValue,
//       },
//     };

//     addItem(product, {
//       product_metadata: { year, brandSet, number, value },
//     });

//     // Clear form fields
//     setName("");
//     setBrandSet("");
//     setYear("");
//     setNumber("");
//     setDesc("");
//     setValue("");
//     setBrandSet("");

//     // Trigger reset state
//     setResetInputState(true);
//     setTimeout(() => setResetInputState(false), 0);

//     if (numberOfCards >= 10) {
//       recalculateCartPrices(subscriptionLevel, numberOfCards);
//     }

//     setCartUpdated(true);
//   };
  

//   useEffect(() => {
//     if (cartUpdated) {
//       setCartUpdated(false);
//     }
//   }, [cartUpdated, cartDetails]);


//   useEffect(() => {
//     setIsClient(true);
//   }, []);


//   useEffect(() => {
//     if ((name && brandSet && year) && (number || desc)) {
//       const query = `${year} ${brandSet} ${name} ${number} ${desc}`;
//       const url = `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(
//         query
//       )}&LH_Sold=1`;
//       setEbayUrl(url);
//     } else {
//       console.log('Missing information:', { name, brandSet, year, number, desc });
//     }
//   }, [name, brandSet, year, number, desc]);


//   const handleCheckout = async () => {
//     setLoading(true);
//     setError(null);
  
//     try {
//       const customerRes = await fetch(
//         `/api/stripe/customer?email=${user.email}`
//       );
//       const customerData = await customerRes.json();
  
//       const numberOfCards = Object.keys(cartDetails).length;
//       const declaredValue = calculateTotalDeclaredValue();
//       const shippingCost = calculateShippingCost(numberOfCards, declaredValue);
//       const totalOrderCost = parseFloat(formattedTotalPrice.replace(/[^0-9.-]+/g, "")) + parseFloat(shippingCost);
  
//       const response = await fetch("/api/stripe/product", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ cartDetails, customerId: customerData.id, totalOrderCost }),
//       });
  
//       const data = await response.json();
//       if (data.sessionId) {
//         const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
//         clearCart();
//         const { error } = await stripe.redirectToCheckout({
//           sessionId: data.sessionId,
//         });
//         if (error) {
//           setError(error.message);
//         }
//       } else {
//         setError("Failed to create Stripe Checkout session");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setError(error.message);
//     }
//     setLoading(false);
//   };


//   const handleRemoveItem = (id) => {
//     console.log("handleRemoveItem called with id: ", id);
//     removeItem(id);
//   };


//   return (

//     <Grid templateColumns="repeat(4, 1fr)">
//       <GridItem
//         colSpan={2}
//         maxW="680px"
//         mt="24"
//         mb="16"
//         mx="2"
//         bg="neutral.95"
//         p="10"
//         pb="16"
//         borderRadius="20"
//       >
//         <Box mb="8">
//           <TitleLarge color="neutral.10">
//             {data?.attributes?.Form_Heading}
//           </TitleLarge>
//           <BodyMedium color="neutral.10">
//             {data?.attributes?.Form_Subheading}
//           </BodyMedium>
//         </Box>

//         <Box>
//           <Box mr="4" minW="160px">
//             <InputFloatLight
//               label="Player Name / Character"
//               id={"playername"}
//               name="playername"
//               type={"text"}
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required={true}
//               resetState={resetInputState}
//             />
//           </Box>
//           <Box mr="4" minW="160px">
//             <InputFloatLight
//               label="Brand / Set"
//               id={"brandSet"}
//               name="brandSet"
//               type={"text"}
//               value={brandSet}
//               onChange={(e) => setBrandSet(e.target.value)}
//               required={true}
//               resetState={resetInputState}
//             />
//           </Box>
//           <Box
//             display="flex"
//             flex="wrap"
//             alignItems="center"
//             flexDirection={{ base: "column", md: "row" }}
//             required={true}
//           >

//             <Box mr="4" minW="160px">
//               <InputFloatLight
//                 label="Card Year"
//                 id={"cardyear"}
//                 type={"text"}
//                 value={year || ""}
//                 onChange={(e) => setYear(e.target.value)}
//                 required={true}
//               />
//             </Box>
//             <Box mr="4" minW="160px">
//               <InputFloatLight
//                 label="Card #"
//                 id={"cardnumber"}
//                 type={"text"}
//                 value={number || ""}
//                 onChange={(e) => setNumber(e.target.value)}
//                 required={true}
//               />
//             </Box>

//           </Box>

//           <Box mr="4" minW="160px">
//             <InputFloatLight
//               label="Description/Parallel/Variation"
//               id={"description"}
//               type={"text"}
//               value={desc}
//               onChange={(e) => setDesc(e.target.value)}
//               required={true}
//             />
//           </Box>

//           <Box mr="4" minW="160px">
//             <InputFloatWithPrefix
//               label="Declared Value"
//               id={"declaredValue"}
//               type={"text"}
//               value={value || ""}
//               onChange={(e) => setValue(e.target.value)}
//               required={true}
//             />
//           </Box>

//             <Box mb="4" mr="4" minW="180px" h="16">
//               <Select
//                 placeholder="-- Slab Style --"
//                 bg="neutral.90"
//                 borderColor="neutral.80"
//                 fontSize="1.2rem"
//                 fontWeight="500"
//                 h="16"
//                 borderRadius="8"
//                 value={slabStyle}
//                 onChange={(e) => setSlabStyle(e.target.value)}
//               >
//                 <option value="Topps">Clear Acrylic</option>
//                 <option value="Panini">Black Acrylic</option>
//               </Select>
//             </Box>


//           <Box mt="4">
//             {ebayUrl ? (
//               <Link
//                 href={ebayUrl}
//                 isExternal
//                 variant="primaryLightText"
//                 size="mdText"
//               >
//                 See {year + " " + brandSet + " " + name + " " + number} examples on
//                 eBay
//               </Link>
//             ) : null}
//           </Box>
//         </Box>

//         <Button
//           mt="4"
//           size={{ base: "md", md: "lg" }}
//           type="submit"
//           variant="primaryLight"
//           onClick={(e) => addToCart(e)}
//         >
//           {"Add to Order"}
//         </Button>
//       </GridItem>

//       {isClient && (
//         <GridItem
//           colSpan={2}
//           maxW="680px"
//           mt="24"
//           mb="20"
//           mx="2"
//           bg="neutral.95"
//           p="10"
//           pb="16"
//           borderRadius="20"
//         >
//           <Box>
//             <Box mb="4">
//               <TitleLarge color="neutral.10">Order Summary</TitleLarge>
//             </Box>

//             <Box mb="6" p="7" pb="5" bg="neutral.90" borderRadius="1rem">
//               <Box display={"flex"} justifyContent={"space-between"} mb="1">
//                 <LabelMedium>Total Items:</LabelMedium>
//                 <BodyMedium>{cartCount}</BodyMedium>
//               </Box>
//               <Box display={"flex"} justifyContent={"space-between"} mb="2">
//                 <LabelMedium>Total Declared Value:</LabelMedium>
//                 <BodyMedium>${calculateTotalDeclaredValue()}</BodyMedium>
//               </Box>
//             </Box>

//             <Box mb="6" p="7" bg="neutral.90" borderRadius="1rem">
//               <Box display={"flex"} justifyContent={"space-between"} mb="1">
//                 <LabelMedium>Grading Fees:</LabelMedium>
//                 <BodyMedium>
//                   {formattedTotalPrice}
//                 </BodyMedium>
//               </Box>
//               <Box display={"flex"} justifyContent={"space-between"} mb="1">
//                 <LabelMedium>Shipping:</LabelMedium>
//                 <BodyMedium>${shippingCost}</BodyMedium>
//               </Box>
//               <Box display={"flex"} justifyContent={"space-between"} mb="2">
//                 <LabelMedium>Insurance:</LabelMedium>
//                 <BodyMedium>
//                   {insurance !== null ? `$${insurance.toFixed(2)}` : "$0.00"}
//                 </BodyMedium>
//               </Box>
//               <Box
//                 display={"flex"}
//                 justifyContent={"space-between"}
//                 borderTop="1px"
//                 borderColor="neutral.80"
//                 pt="2"
//               >
//                 <LabelMedium>Order Total:</LabelMedium>
//                 <BodyMedium>{`$${calculateTotalPriceWithShippingAndInsurance()}`}</BodyMedium>
//               </Box>
//             </Box>

//             <Button
//               size={{ base: "md", md: "lg" }}
//               variant="primaryLight"
//               type="submit"
//               onClick={(e) => handleCheckout()}
//             >
//               {"Place Your Order"}
//             </Button>
//           </Box>

//           <Box mt="12" mb="8">
//             <Box display="flex" justifyContent="space-between" mb="2">
//               <TitleLarge color="neutral.10">Items In Order</TitleLarge>
//               <Link
//                 href="#"
//                 alt=""
//                 variant="primaryLightText"
//                 type="submit"
//                 onClick={(e) => clearCart()}
//               >
//                 {"Clear the Cart"}
//               </Link>
//             </Box>

//             <Box mb="5" p="7" bg="neutral.90" borderRadius="1rem">
//               {Object.keys(cartDetails).length ? (
//                 <>
//                   {Object.keys(cartDetails).map((item, index) => (
//                     <Box
//                       key={index}
//                       bg="white"
//                       p="4"
//                       mb="5"
//                       borderRadius="0.8rem"
//                     >
//                       <Box
//                         display={"flex"}
//                         justifyContent={"space-between"}
//                         alignItems="center"
//                       >
//                         <LabelMedium mb="1">
//                           {`${cartDetails[item].product_data.year} 
//                         ${cartDetails[item].product_data.brandSet} 
//                         ${cartDetails[item].name} #${cartDetails[item].product_data.number}`}
//                         </LabelMedium>

//                         <Link
//                           href="#/"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             handleRemoveItem(cartDetails[item].id);
//                           }}
//                           color="red.500"
//                           variant="noDeco"
//                           size="mdText"
//                           ml="4"
//                           mb="2"
//                         >
//                           <Icon as={MdDelete} w="6" h="6" color="primary.40" />
//                         </Link>
//                       </Box>
//                       <Box display={"flex"} justifyContent={"space-between"}>
//                         <LabelMedium>Declared Value:</LabelMedium>
//                         <BodyMedium>
//                           ${cartDetails[item].product_data.value}
//                         </BodyMedium>
//                       </Box>
//                       <Box display={"flex"} justifyContent={"space-between"}>
//                         <LabelMedium>Grading Fee:</LabelMedium>
//                         <BodyMedium>
//                           {cartDetails[item].formattedValue}
//                         </BodyMedium>
//                       </Box>
//                     </Box>
//                   ))}
//                 </>
//               ) : (
//                 <Text>No Items</Text>
//               )}
//             </Box>
//           </Box>
//         </GridItem>
//       )}
//     </Grid>
//   );
// }
