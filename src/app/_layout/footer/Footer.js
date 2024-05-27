'use client'
import { Box, Image, Link, Text } from "@chakra-ui/react";
import FullContainer from "../containers/FullContainer";
import NavLinkFooter from "./NavLinkFooter";
import BodyMedium from "@/app/_components/typography/BodyMedium";


export default function Footer({ colorScheme }) {

  colorScheme = colorScheme ? colorScheme : 'neutralDark';

  return (


    <Box 
      bg={colorScheme + '.background'}
      border='1px'
      borderColor={colorScheme + '.outline-dim'}
    >
      <FullContainer>

        <Box
          display='flex'
          alignItems={{ base: 'flex-start', lg: 'center' }}
          justifyContent='space-between'
          flexDirection={{
            base: 'column',
            lg: 'row'
          }}
          pt='8'
          pb='8'
        >    
          <Box
            display='flex'

            alignItems='center'
            flexGrow='2'
          >
            <Box>
              <Box mr='12' mb='3' maxW='260px'>
                <Link href='/' variant='noDeco'>
                <Image 
                  src="/logo-gold.png"
                  fill
                  alt=""
                />
                </Link>
              </Box>
              <Box
                display='flex'
                flexWrap='wrap'
                flexDirection={{
                  base: 'column',
                  md: 'row'
                }}
                ml='-4'
                mb={{ base: '8', xl: '0' }}
              >
                <NavLinkFooter href="/page/pricing" label='Services & Prices' />
                <NavLinkFooter href="/page/grading-standards" label='Grading Standards' />
                <NavLinkFooter href="/page/faq" label='FAQs' />
                <NavLinkFooter href="/page/about" label='About' />
                <NavLinkFooter href="/page/contact" label='Contact Us' />
              </Box>
            </Box>
            
          </Box>

          <Box display='flex' alignItems='center'>
            <Link href='#' variant='neutralDark'>Sign Up Today</Link>
          </Box>

        </Box>

        <Box 
          maxW='5xl'
          // borderTop='1px'
          // borderColor={colorScheme + '.outline-dim'}
          pt='4'
          pb='12'
        >
          <BodyMedium color={colorScheme + '.outline'}>©2024 Diamond Grade Cards LLC. All rights reserved</BodyMedium>
        </Box>

      </FullContainer>
    </Box>

  )
}