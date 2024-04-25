import React from "react";
import { Heading, Text } from '@chakra-ui/react'

export default function TitleMedium({ children, color }) {

  color ? color : color = 'black'

  return (
    <Text 
      color={color}
      fontSize={{ base: '1.25rem', md: '1.3rem', lg: '1.3rem' }}
      lineHeight={{ base: '108%', md: '104%', lg: '142%' }}
      fontWeight='500'
      mb='0.5rem'
    >{ children }</Text>
  )
}
