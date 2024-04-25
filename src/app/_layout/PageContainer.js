'use client'
import { Box, Text } from "@chakra-ui/react";
import PageContainerGeneral from "./PageContainerGeneral";
// import Footer from "./footer/Footer";



export default function PageContainer({ data, children, contentType }) {

  contentType = 'general'

  return (

    <Box 
      display='flex' 
      justifyContent='center' 
      width='100%'
    >
      <Box width='100%' maxW='1920px' bg='neutral.100' boxShadow='2xl'>

        {
          contentType = 'general' ?
          <PageContainerGeneral data={data}>
            {children}
          </PageContainerGeneral>
          : null
        }

        {children}

        {/* <Footer data={data} contentType={contentType} /> */}
        
      </Box>
    </Box>

  )

}