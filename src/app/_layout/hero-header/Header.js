"use client";
import { Box, Image, Link, Text, Button } from "@chakra-ui/react";
import Desktop from "./navigation/Desktop";
import FullContainer from "../containers/FullContainer";
import { useUser } from '@auth0/nextjs-auth0/client';
import MobileNavDrawer from "./navigation/mobile-nav/MobileNavDrawer";

export default function Header({ data, children, contentType }) {
  const { user, error, isLoading } = useUser();

  return (
    <FullContainer>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        py="6"
      >

        <Box display={{ base: 'block', xl: 'none' }} mr='4' ml='-2'>
          <MobileNavDrawer />
        </Box>

        <Box display='flex' alignItems='center'>
          <Box display="flex" alignItems="center">
            <Box mr={{ base: '4', sm: '4', md: '16' }} maxW="240px">
              <Link href="/" variant="noDeco">
                <Image src="/logo-gold.png" fill alt="" />
              </Link>
            </Box>
          </Box>
          <Box mr="16" display={{ base: 'none', xl: 'flex' }}>
            <Desktop />
          </Box>
        </Box>

        <Box 
          display='flex'
          gap={5} 
          alignItems="center"
        >


          <Box display={{ base: 'none', md: 'flex' }}>
            {!user ? (
              <Link href={`/api/auth/login?returnTo=${encodeURIComponent('/account')}`} variant="neutralDark">
                Sign Up / Login
              </Link>


            ) : (
              <>
                <Link href="/form/submit-card" variant="neutralDark" mr='4'>
                  Submit a Card
                </Link>
                <Link href="/account" variant="neutralDark">
                  My Account
                </Link>
              </>
            )}
          </Box>

        </Box>
      </Box>
    </FullContainer>
  );
}
