'use client'
import { Box, Text } from "@chakra-ui/react";
import HeroHeaderGeneral from "./hero-header/HeroHeaderGeneral";
import HeroHeaderHome from "./hero-header/HeroHeaderHome";
import Footer from "./footer/Footer";


export default function PageContainerHome({ data, children, contentType }) {

  return (

    <Box>
      <HeroHeaderHome data={data} />
      
      {children}

      <Footer />

    </Box>

  )

}