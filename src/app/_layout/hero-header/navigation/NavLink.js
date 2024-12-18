'use client'
import { Box, Link, Icon } from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons'

export default function NavLink({ href, label, onClick, isSubMenuVisible, isSubMenuCardVisible, dropDown }) {

  // console.log('NavLink')
  // console.log(isSubMenuVisible)

  return (

    <Box mr={{ base: '0.25rem', '2xl': '1rem'}}>

        <Link 
          href={href}
          onClick={onClick}
          color='neutral.90'
          textDecor='none'
          fontSize='1.2rem;'
          fontWeight='400'
          py='4'
          variant='none'
          _hover={{
            textDecoration: 'none',
            color: 'primary.90',
          }}
        >
          {label}
          {
            dropDown && (isSubMenuVisible || isSubMenuCardVisible) ? <ChevronUpIcon ml='1' />
            : dropDown && (!isSubMenuVisible || isSubMenuCardVisible) ? <ChevronDownIcon ml='1' />
            : null
          }  
        </Link>

    </Box>

  )

}