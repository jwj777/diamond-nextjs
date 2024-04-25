'use client'
import { Box, Text } from "@chakra-ui/react";
import HeroHeaderForm from "./hero-header/HeroHeaderForm";


export default function PageContainerForm({ data, children, contentType }) {

  return (

    <Box>
      <HeroHeaderForm data={data} />
      
      <Box bg='neutral.100'>
        {children}
      </Box>

    </Box>

  )

}