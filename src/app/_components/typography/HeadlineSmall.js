import React from "react";
import { Heading, Text } from '@chakra-ui/react'

export default function HeadlineSmall({ children, color, thin }) {

  color ? color : color = 'black'
  let weight
  thin ? weight = '300' : weight = '400'

  return (
    <Text 
      color={color}
      fontSize={{ base: '1.4rem', md: '1.6rem', lg: '1.8rem' }}
      lineHeight={{ base: '136%', md: '138%', lg: '140%' }}
      fontWeight={weight}
      mb='0.5rem'
    >{ children }</Text>
  )
}
