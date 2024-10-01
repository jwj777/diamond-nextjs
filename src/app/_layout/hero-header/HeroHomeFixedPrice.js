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
      pt={{ base: '12', sm: '120', md: '16' }} 
      pb={{ base: '40', sm: '40', md: '48' }} 
      background={'none'}
    >

          <XlContainer>
            <Box 
              display='flex' 
              background={'rgba(50,48,44,0.7)'}
              maxW='1040px'
              borderRadius='1.5rem'
              px='12'
              pt='12'
              pb='24'
            >
              <Box width={{ base: 'auto', xl: '600px' }}>
                <Box mr='8' mb='2rem'>
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
              bottom={{ base: '0px', xl: '500px' }} 
              left={{ base: '0px', xl: '640px' }} 
              mb={{ base: '0px', xl: '-480px' }}
              ml={{ base: '0', xl: '16'}}
            >
              <Box 
                position='relative' 
                top={{ base: '', lg: '-40px', xl: '80px' }}
              >
                <Image 
                  src={
                    'https://diamondgrade.s3.us-east-1.amazonaws.com/'
                    + activePromotion.attributes.Cards[0].CardImage.data.attributes.hash
                    + activePromotion.attributes.Cards[0].CardImage.data.attributes.ext
                  }
                  width='280px'
                  height='100%'
                />
              </Box>
              {
                activePromotion.attributes.Cards[1] &&
                <Box position='relative' right='96px' bottom='24px'>
                  <Image 
                  src={
                    'https://diamondgrade.s3.us-east-1.amazonaws.com/'
                    + activePromotion.attributes.Cards[1].CardImage.data.attributes.hash
                    + activePromotion.attributes.Cards[1].CardImage.data.attributes.ext
                  }
                    width='280px'
                    height='100%'
                  />
                </Box>
              }
              {
                activePromotion.attributes.Cards[2] &&
                <Box position='relative' right='180px' top='36px'>
                  <Image 
                  src={
                    'https://diamondgrade.s3.us-east-1.amazonaws.com/'
                    + activePromotion.attributes.Cards[2].CardImage.data.attributes.hash
                    + activePromotion.attributes.Cards[2].CardImage.data.attributes.ext
                  }
                    width='280px'
                    height='100%'
                  />
                </Box>
              }
            </Box>

          </XlContainer>

    </Box>

  )

}