'use client'
import { Box, Image, Text } from "@chakra-ui/react";
import TitleLarge from "../../typography/TitleLarge";
import BodyMedium from "../../typography/BodyMedium";


export default function BasicCard({ data }) {
  
  // console.log('Trading Card')
  // console.log(data.CardImage.data.attributes.url)

  return (

    <Box mx='4' width='360px' mb='6'>
      <Box 
        borderTopStartRadius='1.5rem'
        borderTopEndRadius='1.5rem'
        overflow='hidden'
      >
        <Image 
          src={'https://diamondgrade.s3.us-east-1.amazonaws.com/' + data.Image.data.attributes.hash + data.Image.data.attributes.ext}
          height='200px'
          width='100%'
          objectFit='cover'
          alt=""
        />
      </Box>
      <Box 
        bg='neutral.95' 
        p='8' pb='10' pt='6'
        borderBottomStartRadius='1.5rem'
        borderBottomEndRadius='1.5rem'
      >
        <Box>
          <TitleLarge color='primary.10'>{data.Title}</TitleLarge>
        </Box>
        <BodyMedium color='neutral.30'>{data.Body}</BodyMedium>
      </Box>
    </Box>

  )

}

