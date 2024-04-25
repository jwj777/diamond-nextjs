'use client'
import { Box } from "@chakra-ui/react";
// import Footer from "./footer/Footer";

export default function XlContainer({ children }) {

  return (

    <Box 
      className='xlContainer'
      mx='auto'
    >
      {children}
    </Box>

  )

}