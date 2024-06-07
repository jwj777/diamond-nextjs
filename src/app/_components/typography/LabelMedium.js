import React from "react";
import { Box } from '@chakra-ui/react'


export default function LabelMedium({ children, textColor, color, mb, mr }) {

  textColor ? color = textColor : null
  color ? color : color = 'neutral.10'

  return (

    <Box 
      className='labelMedium'
      fontFamily='figtree'
      fontSize={{ base: '1rem', md: '1.05rem' }}
      lineHeight={{ base: '152%', md: '154%' }}
      color={color}
      fontWeight='500'
      mb={mb}
      mr={mr}
    >
      {children}
    </Box>

  )
}
