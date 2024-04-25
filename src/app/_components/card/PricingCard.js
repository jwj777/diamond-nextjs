'use client'
import { Box, Image, Text } from "@chakra-ui/react";
import TitleLarge from "../typography/TitleLarge";
import HeadlineLarge from "../typography/HeadlineLarge";


export default function PricingCard({ data, title, price, children }) {
  
  // console.log('Trading Card')
  // console.log(data.CardImage.data.attributes.url)

  return (

    <Box maxW='280px' mt='24' mx='2' bg='neutral.20' p='8' borderRadius='20'>
      <TitleLarge color='neutral.90'>{title}</TitleLarge>
      <HeadlineLarge color='neutral.100'>{price}</HeadlineLarge>
      {children}
    </Box>

  )

}

