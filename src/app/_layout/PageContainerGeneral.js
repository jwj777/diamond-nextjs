'use client'
import { Box, Text } from "@chakra-ui/react";
import HeroHeaderGeneral from "./hero-header/HeroHeaderGeneral";
import Footer from "./footer/Footer";


export default function PageContainerGeneral({ data, children, contentType }) {

  return (

    <Box>
      <HeroHeaderGeneral data={data} />
      
      <Box bg='neutral.100'>
        {children}
      </Box>

      <Footer />

    </Box>

  )

}