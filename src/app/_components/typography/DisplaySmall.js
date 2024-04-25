import React from "react";
import { Heading, Text } from '@chakra-ui/react'

export default function DisplaySmall({ children, color, type }) {

  color ? color : color = 'black'

  type ? type : type = 'h2'

  return (
    <Text 
      as={type}
      color={color}
      fontSize={{ base: '2.5rem', md: '2.9rem', lg: '3.2rem' }}
      lineHeight={{ base: '108%', md: '116%', lg: '118%' }}
      fontWeight='400'
      fontFamily='figtree'
      letterSpacing='-0.5px' 
      mt={{ base: '1rem', md: '0' }}
      mb={{ base: '1rem', md: '1.2rem' }}
    >{ children }</Text>
  )
}
