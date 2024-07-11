import { radioAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(radioAnatomy.keys)

  const baseStyle = definePartsStyle({

    control: {
      borderColor: 'neutral.40', 
      borderWidth: '2px',

      _checked: {
        background: "primary.40",
        borderColor: "primary.40",
        _hover: {
          background: "primary.40",
          borderColor: 'primary.40'
        },
      },

      _hover: {
        background: "neutral.80",
        borderColor: 'neutral.40'
      },

      },

    },

  )
  
  export const radioTheme = defineMultiStyleConfig({ baseStyle })