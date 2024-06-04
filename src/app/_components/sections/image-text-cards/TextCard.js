'use client'
import { Box, Image, Text } from "@chakra-ui/react";
import TitleLarge from "../../typography/TitleLarge";
import BodyMedium from "../../typography/BodyMedium";


export default function TextCard({ data }) {
  
  // console.log('Trading Card')
  // console.log(data.CardImage.data.attributes.url)

  return (


      <Box 
        maxW={{ base: 'auto', md: '380px'}} 
        mx='4' mb='8' 
        bg='neutral.95' 
        p='8' pb='10' pt='7'
        borderRadius='1.2rem'
      >
        <Box>
          <TitleLarge color='primary.10'>{data.Title}</TitleLarge>
        </Box>
        <BodyMedium color='neutral.30'>{data.Description}</BodyMedium>
      </Box>
   

  )

}

