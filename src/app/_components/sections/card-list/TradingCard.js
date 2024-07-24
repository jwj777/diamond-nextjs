'use client'
import { Box, Image, Text } from "@chakra-ui/react";


export default function TradingCard({ data }) {
  
  // console.log('Trading Card')
  // console.log(data.CardImage.data.attributes.url)

  return (

    <Box maxW='280px' mx='2'>
      <Image 
        src={'https://diamondgrade.s3.us-east-1.amazonaws.com/' + data.CardImage.data.attributes.hash + data.CardImage.data.attributes.ext}
        // src='https://strapi-production-0074.up.railway.app/uploads/george_brett_5bd64ed84c.jpg'
        fill
        alt=""
      />
    </Box>

  )

}

