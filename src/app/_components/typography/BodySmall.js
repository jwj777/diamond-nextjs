import React from "react";
import { Box, Text } from '@chakra-ui/react'
import styles from "./typography.module.css"


export default function BodySmall({ textColor, color, children, mb, mr }) {

  textColor ? color = textColor : null
  color ? color = color : color = 'neutral.10'

  return (
    <Box color={textColor} className={styles.bodyContent2 + ' bodySmall'}>

      <Box 
        fontFamily='figtree'
        fontSize={{ base: '0.9rem', md: '0.95rem' }}
        lineHeight={{ base: '152%', md: '154%' }}
        color={color}
        fontWeight='300'
        mb={mb}
        mr={mr}
      >
        {children}
      </Box>

    </Box>
  )}

