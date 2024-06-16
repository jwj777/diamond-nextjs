'use client'
import BodyLarge from '@/_components/typography/BodyLarge';
import BodyMedium from '@/_components/typography/BodyMedium';
import TitleSmall from '@/_components/typography/TitleSmall';
import { Box, Link, MenuItem, Text } from '@chakra-ui/react';
import { useState } from 'react';


export default function MobileNavLink({ href, children, label, color }) {
  

  return(
    <Box position='relative'>
      <Box 
        display='flex'
        bg='none'
        mb='7'
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