import React from "react";
import { Box, Text } from '@chakra-ui/react'


export default function LabelMedium({ children, textColor, color, mb, mr }) {

  textColor ? color = textColor : null
  color ? color : color = 'neutral.10'

  return (
    <Box 
      className='labelMedium'
      fontFamily='figtree'
      mb={mb}
    >
      <Text 
        fontSize={{ base: '1rem', md: '1rem' }}
        lineHeight={{ base: '152%', md: '152%' }}
        color={color}
        fontWeight='600'
        mb={mb}
        mr={mr}
      >
        {children}
      </Text>
    </Box>

  )
}
