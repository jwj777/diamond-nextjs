'use client'
import { Box, Image, Link, Text } from "@chakra-ui/react";
import Desktop from "./navigation/Desktop";
import FullContainer from "../containers/FullContainer";


export default function Header({ colorScheme }) {

  colorScheme = colorScheme ? colorScheme : 'neutralDark';

  return (

    <FullContainer>

      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        py='6'
      >    
        <Box
          display='flex'
          alignItems='center'
          flexGrow='2'
        >
          <Box mr='12' maxW='260px'>
            <Link href='/' variant='noDeco'>
            <Image 
              src="/logo-gold.png"
              fill
              alt=""
            />
            </Link>
          </Box>
          
        </Box>

        <Box display='flex' alignItems='center'>
          <Box mr='16'>
            <Desktop />
          </Box>
          <Link href='#' variant='neutralDark'>Sign Up Today</Link>
        </Box>

      </Box>

    </FullContainer>

  )
}