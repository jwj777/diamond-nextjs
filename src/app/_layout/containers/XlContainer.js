'use client'
import { Box } from "@chakra-ui/react";
// import Footer from "./footer/Footer";

export default function XlContainer({ children }) {

  return (

        <Box 
          maxW='1216px'
          mx='auto'
          display='flex'
          flexDirection='column'
          alignItems='flex-start'
          flex='1'
        >
          <Box
            width='100%'
            px={{
              sm: 8,
              md: 24,
              lg: 16,
              xl: 4,
              '2xl': 0
            }}
          >
            {children}
          </Box>
        </Box>
  

  )

}