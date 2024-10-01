'use client'
import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";


export default function TopBanner({ promotions }) {

  
  return (

    <LinkBox >
      
      <Box 
        bg='primary.90' 
        pt='3' 
        pb='4'
        _hover={{
          bg: 'primary.80',
          transition: '0.25s ease'
        }}
      >
        <LinkOverlay href='/page/pricing' />
        <Box display='flex' alignItems='center' justifyContent='center' flexWrap='wrap'>
          <Text 
            color='neutral.10'
            fontSize='1.2rem'
            fontWeight='700'
            textAlign={'center'}
            mr='6'
          >
            { promotions.attributes.Promotion_Headline }
          </Text>
          <Text 
            color='neutral.10'
            fontSize='1.2rem'
            fontWeight='700'
            textAlign={'center'}
            mr='6'
          >
            { promotions.attributes.Subheading }
          </Text>
          <Text 
            color='neutral.10'
            fontSize='1.2rem'
            fontWeight='700'
            textAlign={'center'}
            mr='6'
          >
            Sign Up Today
          </Text>
        </Box>
        <Text 
          color='neutral.30'
          fontSize='0.98rem'
          fontWeight='400'
          textAlign={'center'}
          mx='8'
          mt='2px'
        >
          { promotions.attributes.Description }
        </Text>
      </Box>
    </LinkBox>

  )

}

