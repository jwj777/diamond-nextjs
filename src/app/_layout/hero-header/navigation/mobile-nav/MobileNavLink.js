'use client'
import { Box, Link, MenuItem, Text } from '@chakra-ui/react';


export default function MobileNavLink({ href, children, label, color }) {
  

  return(
    <Box position='relative'>
      <Box 
        display='flex'
        bg='none'
        mb='8'
      > 
        <Box>
          <Link 
            href={href} 
            variant='mobileLink' 
          >
            {label}
          </Link>
        </Box>
      </Box>
    </Box>



  )

}