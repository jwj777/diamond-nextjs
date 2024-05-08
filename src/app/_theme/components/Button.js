import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const sm = defineStyle({
  fontSize: '1rem',
  lineHeight: '1rem',
  fontWeight: '400',
  pt: '0.8rem',
  pr: '1.4rem',
  pb: '0.8rem',
  pl: '1.4rem',
})

const md = defineStyle({
  fontSize: '1rem',
  lineHeight: '1rem',
  fontWeight: '400',
  pt: '0.8rem',
  pr: '1.1rem',
  pb: '0.8rem',
  pl: '1.1rem',
})

const lg = defineStyle({
  fontSize: '1rem',
  lineHeight: '1rem',
  fontWeight: '400',
  pt: '0.8rem',
  pr: '1.4rem',
  pb: '0.8rem',
  pl: '1.4rem',
})


const noDeco = defineStyle({
  textDecoration: 'none',
  _hover: {
    textDecoration: 'none',
  },
})

const primaryLight = defineStyle({
  bg: 'primary.40',
  color: 'primary.95',
  borderRadius: '10rem',
    _hover: {
      bg: 'primary.50',
      color: 'primary.100',
      textDecor: 'none',
  }
})

const primaryDark = defineStyle({
  bg: 'rgba(255,255,255,.12)',
  color: 'neutral.90',
  borderRadius: '10rem',
  py: '14px',
  px: '24px',
  fontSize: '1.3rem',
  lineHeight: '1rem',
  fontVariationSettings: '"wdth" 65, "wght" 600, "slnt" -12',
  textTransform: 'uppercase',
    _hover: {
    bg: 'rgba(255,255,255,.24)',
    color: 'neutral.100',
    textDecor: 'none',
  }
})

const neutralLight = defineStyle({
  bg: 'neutral.90',
  color: 'neutral.10',
  borderRadius: '10rem',
    _hover: {
      bg: 'neutral.80',
      color: 'neutral.0',
      textDecor: 'none',
  }
})

const neutralDark = defineStyle({
  bg: 'primary.90',
  color: 'neutral.0',
  borderRadius: '10rem',
    _hover: {
      bg: 'primary.95',
      color: 'primary.10',
      textDecor: 'none',
  }
})

export const Button = defineStyleConfig({
  variants: { 
    noDeco,
    primaryLight,
    primaryDark,
    neutralDark,
    neutralLight,
  },
  sizes: { sm, md, lg  },
  defaultProps: { variant: 'primaryLight', size: 'md' }
})
