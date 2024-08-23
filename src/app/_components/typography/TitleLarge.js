import React from "react";
import { Heading, Text } from '@chakra-ui/react'

export default function TitleLarge({ children, color }) {

  color ? color : color = 'black'

  return (
    <Text 
      color={color}
      fontSize={{ base: '1.3rem', md: '1.5rem', lg: '1.6rem' }}
      lineHeight={{ base: '132%', md: '136%', lg: '142%' }}
      fontWeight={{ base: '500', md: '400' }}
      mb='0.5rem'
    >{ children }</Text>
  )
}
