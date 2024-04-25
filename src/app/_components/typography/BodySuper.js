import React from "react";
import { Box, Text } from '@chakra-ui/react'
import styles from "./typography.module.css"


export default function BodySuper({ text, textColor, color, children, thin }) {

  textColor ? color = textColor : null
  color ? color = color : color = 'white'
  let weight
  thin ? weight = '300' : weight = '400'

  return (
    <Box color={textColor} className={styles.bodyContent2 + ' bodyLarge'}>
      {
      text ?
      <Box 
        dangerouslySetInnerHTML={{ __html: text }} 
        fontSize={{ base: '1.25rem', md: '1.6rem' }}
        fontFamily='figtree'
        lineHeight={{ base: '148%', md: '148%' }}
        fontWeight={weight}
        color={color}
      ></Box> :
      <Box 
        fontFamily='figtree'
        fontSize={{ base: '1.25rem', md: '1.6rem' }}
        lineHeight={{ base: '148%', md: '148%' }}
        color={color}
        fontWeight={weight}
        letterSpacing={'0.3px'}
      >{children}</Box>
}
    </Box>
  )}

