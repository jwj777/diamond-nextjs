'use client'
import { Box } from "@chakra-ui/react";


export default function SectionBackground({ data, children }) {
  
  // console.log('SectionBackground')
  // console.log(data)

  return (

    <Box bg={
      data.background == 'white' ? 'neutral.100'
      : data.background == 'primaryLight' ? 'primary.95'
      : data.background == 'primaryDark' ? 'primary.50'
      : data.background == 'neutralLight' ? 'neutral.95'
      : data.background == 'neutralDark' ? 'neutral.4'
      : 'neutral.100'
    }>
      { children}
    </Box>

  )

}
