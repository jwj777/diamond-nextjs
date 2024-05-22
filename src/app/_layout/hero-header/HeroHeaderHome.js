'use client'
import { Box, LinkBox, Text } from "@chakra-ui/react";
import Header from "./Header";
import HeroGeneral from "./HeroGeneral";
import HeroHome from "./HeroHome";


export default function HeroHeaderHome({ data, children, contentType }) {

  // console.log('HeaderHeroGeneral')
  // console.log(data)

  return (

    <Box 
      bg='url(https://diamondgrade.s3.us-east-1.amazonaws.com/homepage_bg_image_45ae0d8842.png)'
      backgroundPosition='50% 50%'
      backgroundSize='cover'
    >

      <Box>
        <Header />
      </Box>

      <Box>
        <HeroHome data={data} />
      </Box>

    </Box>

  )

}