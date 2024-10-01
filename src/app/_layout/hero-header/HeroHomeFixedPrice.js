'use client'
import { Box, Image, Link } from "@chakra-ui/react";
import XlContainer from "../containers/XlContainer";
import BodyLarge from "@/app/_components/typography/BodyLarge";
import DisplaySuper from "@/app/_components/typography/DisplaySuper";
import HeadlineMedium from "@/app/_components/typography/HeadlineMedium";


export default function HeroHomeFixedPrice({ activePromotion, cardList }) {


  console.log(activePromotion.attributes.Cards[0].CardImage.data.attributes.hash)

  return (

    <Box 
      display='flex'
      pt={{ base: '8', md: '16' }} 
      pb={{ base: '40', sm: '40', md: '48' }} 
      background={'none'}
    >

          <XlContainer>
            <Box 
              display='flex' 
              background={{ base: 'none', sm: 'rgba(50,48,44,0.7)'}}
              maxW={{ base: 'auto', '2xl': '1040px'}}
              borderRadius='1.5rem'
              px={{ base: '0', sm: '8', lg: '12'}}
              pt={{ base: '8', md: '12'}}
              pb={{ base: '400px', '2xl': '24' }}
            >
              <Box width={{ base: 'auto', xl: '960px', '2xl': '600px' }}>
                <Box mr='8' mb={{ base: '0', md: '2rem' }}>
                  <DisplaySuper color='neutral.100'>{activePromotion.attributes.Promotion_Headline}</DisplaySuper>
                </Box>
                <Box display='flex' textAlign='left' mb='4'>
                  <HeadlineMedium color='primary.90'>{activePromotion.attributes.Subheading}</HeadlineMedium>
                </Box>
                <Box mt='4'>
                  <BodyLarge color='neutral.80'>{activePromotion.attributes.Description}</BodyLarge>
                </Box>                
                <Box mt='16'>
                  <Link href='' variant='primaryDark' size='lg'>Sign Up Today</Link>
                </Box>
              </Box>
            </Box>

            <Box 
              display='flex' 
              position='relative' 
              bottom={{ base: '260px', lg: '300px', xl: '360px', '2xl': '500px' }} 
              left={{ base: '0', lg: '0', xl: '26%', '2xl': '50%' }} 
              mb={{ base: '-260px', lg: '-280px', xl: '-360px', '2xl': '-480px' }}
              width='100%'
              ml={{ base: '0', sm: '8', lg: '12', xl: '0', '2xl': '16'}}
              pr={{ base: '16', md: '16', lg: '32', '2xl': '16'}}
            >
              <Box 
                position='relative' 
                top={{ base: '80px', lg: '80px', xl: '80px' }}
              >
                <Image 
                  src={
                    'https://diamondgrade.s3.us-east-1.amazonaws.com/'
                    + activePromotion.attributes.Cards[0].CardImage.data.attributes.hash
                    + activePromotion.attributes.Cards[0].CardImage.data.attributes.ext
                  }
                  width={{ base: '200px', sm: '260px', md: '300px', lg: '360px', '2xl': '280px'}}
                  height='100%'
                />
              </Box>
              {
                activePromotion.attributes.Cards[1] &&
                <Box position='relative' right='140px' bottom='24px' >
                  <Image 
                  src={
                    'https://diamondgrade.s3.us-east-1.amazonaws.com/'
                    + activePromotion.attributes.Cards[1].CardImage.data.attributes.hash
                    + activePromotion.attributes.Cards[1].CardImage.data.attributes.ext
                  }
                  width={{ base: '200px', sm: '260px', md: '300px', lg: '360px', '2xl': '280px'}}
                    height='100%'
                  />
                </Box>
              }
              {
                activePromotion.attributes.Cards[2] &&
                <Box position='relative' right='260px' top='36px' mr={{ base: '-320px', sm: '-260px', lg: '-260px', '2xl': '0px' }}>
                  <Image 
                  src={
                    'https://diamondgrade.s3.us-east-1.amazonaws.com/'
                    + activePromotion.attributes.Cards[2].CardImage.data.attributes.hash
                    + activePromotion.attributes.Cards[2].CardImage.data.attributes.ext
                  }
                  width={{ base: '200px', sm: '260px', md: '300px', lg: '360px', '2xl': '280px'}}
                    height='100%'
                  />
                </Box>
              }
            </Box>

          </XlContainer>

    </Box>

  )

}