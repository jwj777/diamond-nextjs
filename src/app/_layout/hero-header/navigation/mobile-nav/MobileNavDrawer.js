import {
  Box,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Link,
  Image,
  Icon,
} from '@chakra-ui/react'
import { FiMenu } from "react-icons/fi";
import React from 'react'
import MobileNavLink from './MobileNavLink';
import { useUser } from '@auth0/nextjs-auth0/client';
import MobileGrading from './MobileGrading';
import MobileResources from './MobileResources';


export default function MobileNavDrawer({ data }) {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const { user, error, isLoading } = useUser();

  let color
  if (data?.attributes.pageColor) {
    if (data?.attributes.pageColor?.includes('Dark')) {
      color = 'mobileDark'
    } else {
      color = 'mobileLight'
    }
  }

  return (
    <Box>

      <Button 
        ref={btnRef}
        onClick={onOpen}
        bg='none'
        p='4'
        _hover={{
          bg: 'none'
        }}
      >
        <Icon
          as={FiMenu}
          w='7'
          h='7'
        />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent background='neutral.4' maxW={{ base: '84%', lg: '440px' }}>
            <DrawerCloseButton color='neutral.90' fontSize='lg' mt='42px' mr='6' />
          <DrawerBody 
            className='mobileDrawerBody'
            px='8'
            pt='8'
            pb='8'
          >

            <Box>
              <Box mr="12" maxW="184px" mb='8'>
                <Link href="/" variant="noDeco">
                  <Image src="/logo-gold.png" fill alt="" />
                </Link>
              </Box>

              <Box ml='-3'>
                <MobileGrading />
                <MobileResources />
                <MobileNavLink href='/page/about' label='About' />
                <MobileNavLink href='https://dgc-store.com/' label='DGC Store' />
                <MobileNavLink href='/page/contact' label='Contact Us' />

                <Box mt='16' ml='4' display='flex' flexDir={'column'}>
                  {!user ? (
                    <Box mb='8'>
                      <Link href="/api/auth/login" variant="neutralDark">
                        Sign Up Today
                      </Link>
                    </Box>
                  ) : (
                    <Box display='flex' flexDirection='column'>
                      <Link href="/form/submit-card" variant="neutralDarkAlt" mb='4'>
                        Submit a Card
                      </Link>
                      <Link href="/account" variant="neutralDark" mb='4'>
                        My Account
                      </Link>
                      <Link href="/api/auth/logout" variant="neutralDark" mb='4'>
                        Logout
                      </Link>
                    </Box>
                  )}
                </Box>


              </Box>
            </Box>

          </DrawerBody>
        </DrawerContent>
      </Drawer>

    </Box>

  )
}