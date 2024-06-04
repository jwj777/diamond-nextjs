'use client'
import { Box, Link, Icon } from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons'

export default function NavLinkFooter({ href, label, onClick, isSubMenuVisible, dropDown }) {

  console.log('NavLink')
  console.log(isSubMenuVisible)

  return (

    <Box mr='4px' mb='12px'>

        <Link 
          href={href}
          onClick={onClick}
          color='neutral.95'
          textDecor='none'
          fontSize='1.1rem;'
          fontWeight='400'
          py='3'
          variant='none'
          _hover={{
            textDecoration: 'none',
            color: 'primary.90',
          }}
        >
          {label}
          {
            dropDown && isSubMenuVisible ? <ChevronUpIcon />
            : dropDown && !isSubMenuVisible ? <ChevronDownIcon />
            : null
          }  
        </Link>

    </Box>

  )

}