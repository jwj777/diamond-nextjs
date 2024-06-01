'use client'
import { Box, LinkBox, Text } from "@chakra-ui/react";
import Header from "./Header";
import HeroGeneral from "./HeroGeneral";
import HeroHome from "./HeroHome";


export default function HeroHeaderHome({ data, children, contentType }) {

  // console.log('HeaderHeroGeneral')
  // console.log(data)

  return (

    <Box bg='neutral.10'>

      <Box>
        <Header />
      </Box>
      {children}

    </Box>

  )

}