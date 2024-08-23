'use client'
import { Box, Link, Text } from "@chakra-ui/react";
import BodyLarge from "./typography/BodyLarge";
import BodyMedium from "./typography/BodyMedium";


export default function PromotionBanner() {
  


  return (

    <Box display='flex' justifyContent={'center'} bg='primary.90' py='3'>
      <Box display='flex' alignItems='center' justifyContent='center' flexWrap='wrap'>
        <Text 
          color='primary.10'
          fontSize='1.1rem'
          // mx='auto'
          textAlign={'center'}
          mx='8'
        >
          <Link 
            href='/page/pricing' 
            variant='noDeco' 
            color='primary.10'
            textDecor='underline'
            px='1'
            fontSize='1.1rem'
            fontWeight='600'
            _hover={{
              textDecor: 'underline',
              color: 'primary.0'
            }}
          >
            Sign Up For Any Membership
          </Link> 
          and Get 25% Your First Card Submission
        </Text>
        <Text mt='1px' fontSize='1.1rem' mx='auto'>
          Use Code <Text as='span' fontWeight='700'>DGC25</Text> at Checkout
        </Text>
      </Box>
    </Box>

  )

}

