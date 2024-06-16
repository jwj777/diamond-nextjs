import {
  Box,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import { FiMenu } from "react-icons/fi";
import React from 'react'
import Logo from '../../brand/Logo';
import MobileNavLink from './MobileNavLink';
import MobileShippers from './MobileShippers';
import MobileCarriers from './MobileCarriers';
import LogoMobile from '@/_components/brand/LogoMobile';

export default function MobileNavDrawer({ data }) {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  // console.log('MobileNavDrawer')
  // console.log(data)

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

      <Button ref={btnRef} onClick={onOpen} variant={color}>
        <FiMenu />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent background='neutral.4' maxW={{ base: '84%', lg: '440px' }}>
            <DrawerCloseButton color='neutral.90' fontSize='lg' mt='8' mr='6' />
          <DrawerBody 
            className='mobileDrawerBody'
            p='6'
            pb='8'
          >

            <Box>
              <Box mb='4' ml='-2px'>
                <LogoMobile data={data} color='neutralDark' />
              </Box>

              <Box>
                <MobileShippers data={data} />
                <MobileCarriers data={data} />
                <Box>
                  <Box mt='6' ml='8'>
                    <MobileNavLink href='/page/about' label='About' color={'neutral.90'} />
                    <MobileNavLink href='/page/resources' label='Resources' color={'neutral.90'} />
                    <MobileNavLink href='/page/careers' label='Careers' color={'neutral.90'} />
                    <MobileNavLink href='/page/contact' label='Contact Us' color={'neutral.90'} />
                  </Box>
                </Box>
              </Box>
            </Box>

          </DrawerBody>
        </DrawerContent>
      </Drawer>

    </Box>

  )
}