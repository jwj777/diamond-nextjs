import React from "react";
import { Box, Text } from '@chakra-ui/react'
import styles from "./typography.module.css"


export default function BodyMedium({ text, textColor, textAlign, color, children, mb, mr }) {

  textColor ? color = textColor : null
  color ? color = color : color = 'neutral.10'

  return (
    <Box 
      color={textColor} 
      // className={styles.bodyContent2 + ' bodyMedium'}
    >

      <Box 
        fontSize={{ base: '1rem', md: '1rem' }}
        lineHeight={{ base: '152%', md: '152%' }}
        color={color}
        fontWeight='400'
        textAlign={textAlign}
        mb={mb}
        mr={mr}
      >
        {children}
      </Box>

    </Box>
  )}

