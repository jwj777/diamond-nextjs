import React from "react";
import { Heading, Text } from '@chakra-ui/react'

export default function DisplayLarge({ children, color, type }) {

  color ? color : color = 'neutral.0'
  type ? type : type = 'h2'

  return (
    <Text 
      as='h1'
      color={color}
      fontSize={{ base: '2.8rem', md: '4rem', lg: '4.5rem' }}
      lineHeight={{ base: '120%', md: '106%', lg: '108%' }}
      fontWeight='300'
      fontFamily='figtree'
      letterSpacing={{ base:'-0.5px', md: '-1px' }}
      mt={{ base: '1rem', md: '0' }}
      mb={{ base: '1rem', md: '1.2rem' }}
    >{ children }</Text>
  )
}
