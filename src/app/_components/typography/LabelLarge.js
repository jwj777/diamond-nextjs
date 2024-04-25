import React from "react";
import { Text } from '@chakra-ui/react'


export default function LabelLarge({ children, textColor, color }) {

  textColor ? color = textColor : color = 'black'
  color ? color : color = 'black'

  return (
    <Text 
      className="overline"
      fontSize={{ base: '1.05rem', md: '1.15rem' }}
      fontFamily='Alliance'
      fontWeight='300'
      textTransform='uppercase'
      letterSpacing='9px'
      color={color}
    >{ children }</Text>
  )
}
