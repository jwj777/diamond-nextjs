import React from "react";
import { Text } from '@chakra-ui/react'

export default function DisplayMedium({ children, color, type }) {

  color ? color : color = 'neutral.0'
  type ? type : type = 'h2'

  return (
    <Text 
      as={type}
      color={color}
      fontSize={{ base: '2.8rem', md: '3.2rem', lg: '3.8rem' }}
      lineHeight={{ base: '112%', md: '112%', lg: '112%' }}
      fontWeight='400'
      fontFamily='figtree'
      letterSpacing='-0.5px' 
      mt={{ base: '1rem', md: '0' }}
      mb={{ base: '1rem', md: '1.2rem' }}
    >{ children }</Text>
  )
}
