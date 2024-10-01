'use client'
import { Box } from "@chakra-ui/react";
// import Footer from "./footer/Footer";

export default function XlContainer({ children }) {

  return (

        <Box 
          maxW='1316px'
          mx='auto'
          display='flex'
          flexDirection='column'
          alignItems='flex-start'
          flex='1'
        >
          <Box width='100%'>
            <Box
              px={{
                base: 8,
                sm: 8,
                md: 16,
                lg: 16,
                xl: 16,
                '2xl': 0
              }}
            >
              {children}
            </Box>
          </Box>
        </Box>
  

  )

}