import React from "react";
import { Text } from '@chakra-ui/react'


export default function LabelSmall({ children, textColor, color }) {

  textColor ? color = textColor : null
  color ? color : color = 'neutral.10'


  return (
    <Text 
      className="overline"
      fontSize={{ base: '0.85rem', md: '0.9rem' }}
      fontWeight='400'
      textTransform='uppercase'
      letterSpacing='3px'
      color={color}
    >{ children }</Text>
  )
}
