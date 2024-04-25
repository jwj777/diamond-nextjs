import React from "react";
import { Text } from '@chakra-ui/react'
import styles from './alliance-300.module.css'


export default function LabelMedium({ children, textColor, color }) {

  textColor ? color = textColor : null
  color ? color : color = 'neutral.10'


  return (
    <Text 
      // className="overline"
      className={styles.alliance}
      fontSize={{ base: '1rem', md: '1rem' }}
      fontFamily='Alliance'
      fontWeight='300'
      textTransform='uppercase'
      letterSpacing='8px'
      color={color}
    >{ children }</Text>
  )
}
