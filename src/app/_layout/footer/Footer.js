'use client'
import { 
  Box, 
  Image, 
  Link,  
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import FullContainer from "../containers/FullContainer";
import NavLinkFooter from "./NavLinkFooter";
import BodyMedium from "@/app/_components/typography/BodyMedium";
import BodyLarge from "@/app/_components/typography/BodyLarge";
import { useUser } from '@auth0/nextjs-auth0/client';


export default function Footer({ colorScheme }) {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user, error, isLoading } = useUser();

  colorScheme = colorScheme ? colorScheme : 'neutralDark';

  return (


    <Box 
      bg={colorScheme + '.background'}
      border='1px'
      borderColor={colorScheme + '.outline-dim'}
    >
      <FullContainer>

        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent pb='8' borderRadius='1.5rem' mt='160'>
            <ModalCloseButton size='xl' mt='4' mr='4' />
            <ModalBody pt='20' pb='8' px='16'>
              <Box
                textAlign='center'
              >
                <BodyLarge color='neutral.10'>Login or sign up for a free account to access the newsetter</BodyLarge>
              </Box>
            </ModalBody>

            <ModalFooter display='flex' justifyContent={'center'}>
              <Link href={`/api/auth/login?returnTo=${encodeURIComponent('/account')}`} variant='primaryLight' mr={3}>
                Sign Up / Login
              </Link>
              <Link href='/#' variant='neutralLight' mr={3} onClick={onClose}>
                Close
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Box
          display='flex'
          alignItems={{ base: 'flex-start', lg: 'center' }}
          justifyContent='space-between'
          flexDirection={{
            base: 'column',
            lg: 'row'
          }}
          pt='8'
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
                <NavLinkFooter href="/page/pricing" label='Memberships & Pricing' />
                <NavLinkFooter href="/page/services" label='What We Grade' />
                <NavLinkFooter href="/page/shipping-fees" label='Shipping Fees' />
                <NavLinkFooter href="/page/grading-standards" label='Grading Standards' />
                <NavLinkFooter href="/page/shipping-guide" label='Shipping Guide' />
                <NavLinkFooter href="/page/about" label='About' />
                <NavLinkFooter href="/page/contact" label='Contact Us' />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box mt='4' mb='8'>
        {
          !user ?
          <Link href='/#' variant='primaryDarkText' size='mdText' onClick={onOpen}>Subscribe To Our Newsletter</Link>
          : <Link href='/account' variant='primaryDarkText' size='mdText'>Subscribe To Our Newsletter</Link>
        }
        </Box>

        <Box display='flex' alignItems='center' borderTop='1px' borderColor='neutral.40' mt='6' pt='4' pb='12'>
          <Box display='flex' flexWrap='wrap' alignItems='center' mt='4' mb='4' mr='8'>
            <Box mr='8'>
              <Link href="/page/privacy-policy" variant='primaryDarkText' size='mdText' color='neutral.60'>Privacy Policy</Link>
            </Box>
            <Link href="/page/terms" variant='primaryDarkText' size='mdText' color='neutral.60'>Terms and Conditions</Link>
          </Box>  
          <Box 
            maxW='5xl'
            mt='4' mb='4'
          >
            <BodyMedium color={colorScheme + '.outline'}>©2024 Diamond Grade Cards LLC. All rights reserved</BodyMedium>
          </Box>
        </Box>           


      </FullContainer>
    </Box>

  )
}