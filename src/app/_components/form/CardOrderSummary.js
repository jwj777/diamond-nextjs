// OrderSummary.js
import React from 'react';
import {
  Box,
  Text,
  Button,
  Link,
  Icon,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import LabelMedium from "../typography/LabelMedium";
import BodyMedium from "../typography/BodyMedium";
import TitleLarge from '../typography/TitleLarge';

const CardOrderSummary = ({ 
  cartCount, 
  calculateTotalDeclaredValue, 
  formattedTotalPrice, 
  shippingCost, 
  insurance, 
  calculateTotalPriceWithShippingAndInsurance, 
  handleCheckout, 
  cartDetails, 
  clearCart, 
  handleRemoveItem 
}) => {

  return (
    <Box>
      <Box mb="4">
        <TitleLarge color="neutral.10">Order Summary</TitleLarge>
      </Box>
      <Box mb="6" p="7" pb="5" bg="neutral.90" borderRadius="1rem">
        <Box display={"flex"} justifyContent={"space-between"} mb="1">
          <LabelMedium>Total Items:</LabelMedium>
          <BodyMedium>{cartCount}</BodyMedium>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} mb="2">
          <LabelMedium>Total Declared Value:</LabelMedium>
          <BodyMedium>${calculateTotalDeclaredValue()}</BodyMedium>
        </Box>
      </Box>
      <Box mb="6" p="7" bg="neutral.90" borderRadius="1rem">
        <Box display={"flex"} justifyContent={"space-between"} mb="1">
          <LabelMedium>Grading Fees:</LabelMedium>
          <BodyMedium>{formattedTotalPrice}</BodyMedium>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} mb="1">
          <LabelMedium>Shipping:</LabelMedium>
          <BodyMedium>${shippingCost}</BodyMedium>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} mb="2">
          <LabelMedium>Insurance:</LabelMedium>
          <BodyMedium>{insurance !== null ? `$${insurance.toFixed(2)}` : "$0.00"}</BodyMedium>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} borderTop="1px" borderColor="neutral.80" pt="2">
          <LabelMedium>Order Total:</LabelMedium>
          <BodyMedium>{`$${calculateTotalPriceWithShippingAndInsurance()}`}</BodyMedium>
        </Box>
      </Box>
      <Button size={{ base: "md", md: "lg" }} variant="primaryLight" type="submit" onClick={(e) => handleCheckout()}>
        {"Place Your Order"}
      </Button>
      <Box mt="12" mb="8">
        <Box display="flex" justifyContent="space-between" mb="2">
          <TitleLarge color="neutral.10">Items In Order</TitleLarge>
          <Link href="#" alt="" variant="primaryLightText" type="submit" onClick={(e) => clearCart()}>
            {"Clear the Cart"}
          </Link>
        </Box>
        <Box mb="5" p="7" bg="neutral.90" borderRadius="1rem">
          {Object.keys(cartDetails).length ? (
            <>
              {Object.keys(cartDetails).map((item, index) => (
                <Box key={index} bg="white" p="4" pt='3' mb="5" borderRadius="0.8rem">
                  <Box display={"flex"} justifyContent={"space-between"} alignItems="center">
                    <LabelMedium>
                      {`${cartDetails[item].product_data.year} 
                      ${cartDetails[item].product_data.brandSet} 
                      ${cartDetails[item].name} #${cartDetails[item].product_data.number}`}
                    </LabelMedium>
                    <Link href="#/" onClick={(e) => {
                      e.preventDefault();
                      handleRemoveItem(cartDetails[item].id);
                    }} color="red.500" variant="noDeco" size="mdText" ml="4" mb="2">
                      <Icon as={MdDelete} w="6" h="6" color="primary.40" />
                    </Link>
                  </Box>
                  <Box mt='-1' mb='1'>
                    <BodyMedium>{`${cartDetails[item].product_data.desc}`}</BodyMedium>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <LabelMedium>Declared Value:</LabelMedium>
                    <BodyMedium>${cartDetails[item].product_data.value}</BodyMedium>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <LabelMedium>Grading Fee:</LabelMedium>
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
    </Box>
  );
};

export default CardOrderSummary;
