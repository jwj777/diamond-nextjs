import React from "react";
import { Text } from '@chakra-ui/react'

export default function DisplaySuper({ children, textColor, color }) {

  textColor ? textColor = textColor : textColor = 'neutral.10'
  color ? textColor = color : textColor

  return (
    <Text 
      as='h1'
      color={textColor ? textColor : color}
      fontSize={{ base: '3rem', md: '4.2rem', lg: '4.8rem', xl: '5.1rem', '2xl': '5.4rem' }}
      lineHeight={{ base: '112%', md: '106%', lg: '100%' }}
      fontWeight='300'
      letterSpacing={{ base: '-0.5px', md: '-2px' }}
      mt={{ base: '1rem', md: '0' }}
      mb={{ base: '1rem', md: '1.2rem' }}
    >{ children }</Text>
  )
}
