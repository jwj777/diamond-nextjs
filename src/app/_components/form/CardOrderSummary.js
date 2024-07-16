// OrderSummary.js
import React, { useState } from 'react';
import {
  Box,
  Text,
  Button,
  Link,
  Icon,
  RadioGroup,
  Radio,
  Checkbox,
  Stack
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import LabelMedium from "../typography/LabelMedium";
import BodyMedium from "../typography/BodyMedium";
import TitleLarge from '../typography/TitleLarge';
import BodySmall from '../typography/BodySmall';
import TitleSmall from '../typography/TitleSmall';
import TitleMedium from '../typography/TitleMedium';


const CardOrderSummary = ({ 
  cartCount, 
  calculateTotalDeclaredValue, 
  formattedTotalPrice, 
  shippingCost, 
  calculateTotalPriceWithShipping, 
  handleCheckout, 
  cartDetails, 
  clearCart, 
  handleRemoveItem,
  warningMessage,
  declaredValue, 
  selectedShippingOption, 
  handleShippingOptionChange,
  // handleTermsAndConditions,
  // agreeToTerms
}) => {

  const [termsAccepted, setTermsAccepted] = useState(false);

  const formatNumberWithCommas = (number) => {
    return number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const totalDeclaredValue = calculateTotalDeclaredValue();

  return (
    <Box>
      <Box mb="6">
        <TitleLarge color="neutral.10">Order Summary</TitleLarge>
      </Box>
      <Box mb="4" p="6" pt='5' pb="3" bg="neutral.90" borderRadius="1rem">
        <Box display={"flex"} justifyContent={"space-between"} mb="1">
          <LabelMedium>Total Items:</LabelMedium>
          <BodyMedium>{cartCount}</BodyMedium>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} mb="2">
          <LabelMedium>Total Declared Value:</LabelMedium>
          <BodyMedium>${calculateTotalDeclaredValue()}</BodyMedium>
        </Box>
      </Box>

      
        <Box mb='4' p="6" py="5" bg="neutral.90" borderRadius="1rem">
          <TitleSmall>Shipping Options</TitleSmall>
          <RadioGroup 
            display='flex'
            name='shipping-options'
            value={selectedShippingOption}
            onChange={(value) => handleShippingOptionChange(value)}
            mt='3'
          >
            <Stack>
            {declaredValue < 500 && (
              <Radio value='usps' mr='2' fontSize='0.9rem'>
                <Box>
                  <BodyMedium>USPS Priority</BodyMedium>
                </Box>
              </Radio>
            )}
            <Radio value='2day' mr='2' fontSize='0.9rem'>
              <Box>
               <BodyMedium>Fedex Standard 2-Day</BodyMedium>
              </Box>
            </Radio>
            <Radio value='overnight' fontSize='sm'>
              <Box>
              <BodyMedium>Fedex Standard Overnight</BodyMedium>
              </Box>
            </Radio>
            </Stack>
          </RadioGroup>
        </Box>
      

      <Box mb="6" p="6" py='5' bg="neutral.90" borderRadius="1rem">
        <Box display={"flex"} justifyContent={"space-between"} mb="1">
          <LabelMedium>Grading Fees:</LabelMedium>
          <BodyMedium>{formattedTotalPrice}</BodyMedium>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} mb="2">
          <LabelMedium>Shipping:</LabelMedium>
          <BodyMedium>${shippingCost}</BodyMedium>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} borderTop="1px" borderColor="neutral.80" pt="2">
          <TitleMedium>Order Total:</TitleMedium>
          <TitleMedium>{`$${calculateTotalPriceWithShipping()}`}</TitleMedium>
        </Box>
      </Box>

      {warningMessage && (
        <Box mb="5">
          <Text color="red.500" fontSize='1.1rem' fontWeight='600'>{warningMessage}</Text>
        </Box>
      )}

      <Box display={"flex"} alignItems="center" mb="6">
        <Checkbox
          borderColor='neutral.40' 
          isChecked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
        >
          <Text as='span'>I agree to the</Text>
        </Checkbox>
        <Link href="/page/terms" target="_blank" variant='primaryLightText' size='mdText' ml="2">
          terms and conditions
        </Link>
      </Box>

      <Button 
        size={{ base: "md", md: "lg" }} 
        variant="primaryLight"
        type="submit" 
        onClick={(e) => handleCheckout()}
        isDisabled={!termsAccepted}
      >
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
                <Box key={index} bg="white" p="4" pt='2' mb="5" borderRadius="0.8rem">
                  <Box display={"flex"} justifyContent={"space-between"} alignItems="center">
                    <LabelMedium>
                      {`${cartDetails[item].product_data.year} 
                      ${cartDetails[item].product_data.brandSet} 
                      ${cartDetails[item].name} #${cartDetails[item].product_data.number}`}
                    </LabelMedium>
                    <Link href="#/" onClick={(e) => {
                      e.preventDefault();
                      handleRemoveItem(cartDetails[item].id);
                    }} variant="noDeco" size="mdText" ml="4" mb="2">
                      <Box display='flex' alignItems='center' mt='2'>
                        <Icon as={MdDelete} w="4" h="4" color="primary.40" mr='2px' mb='2px' />
                        <BodySmall color='primary.40'>Delete</BodySmall>
                      </Box>
                    </Link>
                  </Box>
                  <Box mt='-1' mb='1'>
                    <BodyMedium>{`${cartDetails[item].product_data.desc}`}</BodyMedium>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <LabelMedium>Slab Style:</LabelMedium>
                    <BodyMedium>{cartDetails[item].product_data.slabStyle}</BodyMedium>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <LabelMedium>Declared Value:</LabelMedium>
                    <BodyMedium>${formatNumberWithCommas(parseFloat(cartDetails[item].product_data.value))}</BodyMedium>
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
