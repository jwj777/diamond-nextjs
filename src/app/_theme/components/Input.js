import { defineStyle, defineStyleConfig } from '@chakra-ui/react'


const md = defineStyle({
  field: {
    fontSize: '1rem',
    fontWeight: '400',
    pt: '1.5rem !important',
    pr: '1rem !important',
    pb: '1.5rem !important',
    pl: '1rem',
  }
})

const mdWeb = defineStyle({
  field: {
    fontSize: '1rem',
    fontWeight: '400',
    pt: '0.6rem !important',
    pr: '1rem !important',
    pb: '0.6rem !important'
  }
})


const lg = defineStyle({
  field: {
    fontSize: '1.1rem',
    fontWeight: '500',
    pt: '1.5rem !important',
    pr: '1rem !important',
    pb: '1.5rem !important',
    pl: '1rem',
  }
})

const lgWeb = defineStyle({
  field: {
    fontSize: '1.1rem',
    fontWeight: '500',
    pt: '1.5rem !important',
    pr: '1rem !important',
    pb: '1.5rem !important'
  }
})

const xl = defineStyle({
  field: {
    fontSize: '1.2rem',
    fontWeight: '600',
    pt: '1.1rem',
    pr: '1.5rem',
    pb: '1.1rem',
    pl: '1.5rem',
  }
})

const xlWeb = defineStyle({
  field: {
    fontSize: '1.2rem',
    fontWeight: '600',
    pt: '1.1rem',
    pr: '1.5rem',
    pb: '1.1rem'
  }
})

const lightInput = defineStyle({
  field: {
    border: '1px',
    borderColor: 'gray.400',
    color: 'black',
    borderRadius: '0.5rem',
  },
})




export const Input = defineStyleConfig({
  sizes: { md, lg, xl, mdWeb, lgWeb, xlWeb },
  variants: { lightInput },
})
