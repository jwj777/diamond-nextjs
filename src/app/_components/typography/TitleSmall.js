import React from "react";
import { Heading, Text } from '@chakra-ui/react'

export default function TitleSmall({ children, color, mr, mb }) {

  color ? color : color = 'black'

  return (
    <Text 
      color={color}
      fontSize={{ base: '1rem', md: '1.05rem', lg: '1.05rem' }}
      lineHeight={{ base: '108%', md: '104%', lg: '142%' }}
      fontWeight='600'
      mb={mb}
      mr={mr}
    >{ children }</Text>
  )
}
