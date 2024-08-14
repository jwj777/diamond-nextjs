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

const mdText = defineStyle({
  fontSize: '1rem',
  lineHeight: '1rem',
  fontWeight: '400',
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

const xl = defineStyle({
  fontSize: '1rem',
  lineHeight: '1rem',
  fontWeight: '400',
  pt: '0.8rem',
  pr: '1.4rem',
  pb: '0.8rem',
  pl: '1.4rem',
})

const xxl = defineStyle({
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

const subMenu = defineStyle({
  textDecoration: 'none',
  color: 'neutral.90',
  fontSize: '1.1rem',
  mb: '1',
  _hover: {
    textDecoration: 'underline',
    color: 'neutral.100',
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

const primaryLightText = defineStyle({
  color: 'primary.40',
  textDecoration: 'underline',
    _hover: {
    color: 'primary.10',
  }
})

const primaryDark = defineStyle({
  bg: 'primary.90',
  color: 'neutral.10',
  borderRadius: '10rem',
  py: '14px',
  px: '24px',
  lineHeight: '1rem',
    _hover: {
    bg: 'primary.80',
    color: 'neutral.0',
    textDecor: 'none',
  }
})

const primaryDarkText = defineStyle({
  color: 'primary.90',
  textDecoration: 'underline',
    _hover: {
    color: 'primary.100',
  }
})

const neutralDark = defineStyle({
  bg: 'neutral.20',
  color: 'neutral.90',
  borderRadius: '10rem',
  width: 'fit-content',
    _hover: {
      bg: 'neutral.90',
      color: 'neutral.10',
      textDecor: 'none',
  }
})

const neutralDarkText = defineStyle({
  color: 'neutral.90',
  textDecoration: 'underline',
    _hover: {
    color: 'neutral.100',
  }
})

const neutralDarkAlt = defineStyle({
  bg: 'primary.90',
  color: 'neutral.0',
  borderRadius: '10rem',
  width: 'fit-content',
    _hover: {
      bg: 'primary.95',
      color: 'primary.10',
      textDecor: 'none',
  }
})

const mobileLink = defineStyle({
  textDecoration: 'none',
  color: 'neutral.90',
  borderRadius: '10rem',
  _hover: {
    textDecoration: 'none',
    color: 'neutral.95',
  },
})

export const Link = defineStyleConfig({
  variants: { 
    noDeco,
    primaryLight,
    primaryLightText,
    primaryDark,
    primaryDarkText,
    neutralDark,
    neutralDarkAlt,
    neutralDarkText,
    mobileLink,
    subMenu,
  },
  sizes: { sm, md, mdText, lg, xl, xxl },
  defaultProps: { variant: 'primaryLight', size: 'md' }
})
