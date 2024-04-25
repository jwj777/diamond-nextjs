import React from "react";
import { Text } from '@chakra-ui/react'
import styles from './alliance-400.module.css'

export default function DisplaySuper({ children, textColor, color }) {

  textColor ? textColor = textColor : textColor = 'neutral.10'
  color ? textColor = color : textColor

  return (
    <Text 
      as='h1'
      className={styles.alliance400}
      color={textColor ? textColor : color}
      fontSize={{ base: '3rem', md: '4.2rem', lg: '5.2rem', xl: '5.4rem', '2xl': '5.8rem' }}
      fontFamily='Alliance, sans-serif'
      lineHeight={{ base: '112%', md: '106%', lg: '106%' }}
      fontWeight='500'
      letterSpacing={{ base: '-0.5px', md: '-2px' }}
      mt={{ base: '1rem', md: '0' }}
      mb={{ base: '1rem', md: '1.2rem' }}
    >{ children }</Text>
  )
}
