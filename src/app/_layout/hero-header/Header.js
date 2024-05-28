"use client";
import { Box, Image, Link, Text, Button } from "@chakra-ui/react";
import Desktop from "./navigation/Desktop";
import FullContainer from "../containers/FullContainer";
import { useUser } from '@auth0/nextjs-auth0/client';

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
        <Box display="flex" alignItems="center" flexGrow="2">
          <Box mr="12" maxW="260px">
            <Link href="/" variant="noDeco">
              <Image src="/logo-gold.png" fill alt="" />
            </Link>
          </Box>
        </Box>

        <Box display="flex" gap={5} alignItems="center">
          <Box mr="16">
            <Desktop />
          </Box>
          {!user ? (
            <Link href="/api/auth/login" variant="neutralDark">
              Sign Up Today
            </Link>
          ) : (
            <>
              <Link href="/form/submit-card" variant="neutralDark">
                Submit a Card
              </Link>
              <Link href="/account" variant="neutralDark">
                My Account
              </Link>
              <Link href="/api/auth/logout" variant="neutralDark">
                Logout
              </Link>
            </>
          )}
        </Box>
      </Box>
    </FullContainer>
  );
}
