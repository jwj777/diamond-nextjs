import React from "react";
import { Box, Text } from '@chakra-ui/react'
// import styles from "./typography.module.css"


export default function BodyLarge({ text, textColor, color, children, thin, mb }) {

  textColor ? color = textColor : null
  color ? color = color : color = 'neutral.10'

  return (
    <Box 
      color={textColor} 
    >
      {
      text ?
      <Text 
        dangerouslySetInnerHTML={{ __html: text }} 
        fontSize={{ base: '1.15rem', md: '1.3rem' }}
        lineHeight={{ base: '148%', md: '148%' }}
        fontWeight={400}
        color={color}
        letterSpacing={'0px'}
      ></Text> :
      <Text 
        fontSize={{ base: '1.15rem', md: '1.3rem' }}
        lineHeight={{ base: '148%', md: '148%' }}
        color={color}
        fontWeight={400}
        letterSpacing={'0px'}
        mb={mb}
      >{children}</Text>
}
    </Box>
  )}

