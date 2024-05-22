import React from "react";
import { Heading, Text } from '@chakra-ui/react'

export default function HeadlineLarge({ children, color }) {

  color ? color : color = 'black'

  return (
    <Text 
      color={color}
      fontFamily='figtree'
      fontSize={{ base: '2.4rem', md: '2.8rem', lg: '3rem' }}
      lineHeight={{ base: '108%', md: '104%', lg: '112%' }}
      fontWeight='300'
      letterSpacing='-0.5px' 
      mt={{ base: '1rem', md: '0' }}
      mb={{ base: '1rem', md: '1rem' }}
    >{ children }</Text>
  )
}
