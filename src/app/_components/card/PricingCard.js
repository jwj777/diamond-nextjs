'use client'
import { Box, Image, Text } from "@chakra-ui/react";
import TitleLarge from "../typography/TitleLarge";
import HeadlineLarge from "../typography/HeadlineLarge";
import BodyMedium from "../typography/BodyMedium";
import BodySmall from "../typography/BodySmall";


export default function PricingCard({ title, price, children, highlight, features = [], isAnnual, product, promotion }) {

  const productPrice = product.prices && product.prices[0] ? product.prices[0].unit_amount / 100 : null;

  // console.log("features ", features); 
  
  return (
    <Box 
      width={{
        base: '100%', 
        md: '314px' 
      }}
      mx='2' 
      bg='neutral.15' 
      pb='8' 
      borderRadius='20' 
      textAlign={'center'} 
      height='100%'
    >
      <Box px='5' pt='10'>
        <TitleLarge color='neutral.90'>{title}</TitleLarge>
        <Box mt='6'>
        <HeadlineLarge color='primary.90'>
          {product.id === 'prod_QXnFIxIXPwSySv' ? 'Free' : `$${price}`}  
        </HeadlineLarge>
        </Box>
        {
          title === 'Standard' ?  
          <Box mb='53px'></Box> :
          <Box opacity='0.9' mt='-4'>
            <BodyMedium color='primary.90'>{isAnnual ? 'Per Year' : 'Per Month'}</BodyMedium>
          </Box>
        }
        <Box mt='7' mb='6'>
          <BodyMedium color='neutral.90'>Estimated Turnaround Time: </BodyMedium>
          <BodyMedium color='neutral.95'>
            <Text fontWeight='400'>{highlight}</Text>
          </BodyMedium>
          <BodyMedium color='neutral.95'>
            <Text fontWeight='400'>{promotion}</Text>
          </BodyMedium>
        </Box>

          {children}

        {/* Mapping through the features array */}
        {features.length > 0 && features.map((feature, index) => (
          <Box key={index} mb='4'>
            <BodyMedium color='neutral.100'>{feature.Text}</BodyMedium>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
