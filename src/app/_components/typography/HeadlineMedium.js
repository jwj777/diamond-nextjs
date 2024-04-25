import React from "react";
import { Heading, Text } from '@chakra-ui/react'

export default function HeadlineMedium({ children, color, thin }) {

  color ? color : color = 'black'
  let weight
  thin ? weight = '300' : weight = '400'

  return (
    <Text 
      color={color}
      fontSize={{ base: '1.8rem', md: '2.4rem', lg: '2.4rem' }}
      lineHeight={{ base: '116%', lg: '116%' }}
      fontWeight={weight}
      letterSpacing='-1px' 
      mt={{ base: '1rem', md: '0' }}
      mb={{ base: '1rem', md: '1rem' }}
    >{ children }</Text>
  )
}
