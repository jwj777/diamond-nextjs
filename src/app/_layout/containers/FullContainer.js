'use client'
import { Box } from "@chakra-ui/react";
// import Footer from "./footer/Footer";

export default function FullContainer({ children }) {

  return (

    <Box 
      className='fullContainer'
    >
      {children}
    </Box>

  )

}