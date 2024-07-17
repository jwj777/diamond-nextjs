'use client'
import { Box, Link } from "@chakra-ui/react";
import NavLink from "./NavLink";
import React, { useState, useRef, useEffect } from 'react';
import MobileNavDrawer from "./mobile-nav/MobileNavDrawer";

export default function Desktop() {

  const [isSubMenuVisible, setSubMenuVisible] = useState(false);
  const [isSubMenuCardVisible, setSubMenuCardVisible] = useState(false);
  const navRef = useRef(); // Ref for the menu to handle clicks outside

  // Toggle submenu visibility
  const toggleSubMenu = () => {
    setSubMenuVisible(!isSubMenuVisible);
    isSubMenuCardVisible ? setSubMenuCardVisible(false) : null;
  };

  const toggleSubMenuCard = () => {
    setSubMenuCardVisible(!isSubMenuCardVisible);
    isSubMenuVisible ? setSubMenuVisible(false) : null;
  };

  // Click outside handler
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setSubMenuVisible(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (

    <Box position='relative' zIndex='3'>
      <Box ref={navRef}>
        <Box
          display='flex'
        >
          {/* <NavLink href="/page/pricing" label='Memberships & Prices' /> */}
          <Box>
            <NavLink href="#" label='Card Grading' onClick={toggleSubMenuCard} isSubMenuCardVisible={isSubMenuCardVisible} dropDown={true} />
            {isSubMenuCardVisible && (
              <Box 
                position="absolute" 
                left='-12px' 
                bg="neutral.15" 
                boxShadow="lg" 
                borderRadius='16' 
                mt='6' p="5" pb='5'
                display='flex' 
                flexDirection='column' 
                width='260px'
              >
                <Link href="/page/pricing" variant='subMenu'>Memberships & Prices</Link>
                <Link href="/page/services" variant='subMenu'>What We Grade</Link>
                <Link href="/page/shipping-fees" variant='subMenu'>Shipping Fees</Link>
              </Box>
            )}
          </Box>
          <Box>
            <NavLink href="#" label='Resources' onClick={toggleSubMenu} isSubMenuVisible={isSubMenuVisible} dropDown={true} />
            {isSubMenuVisible && (
              <Box
              position="absolute" 
              left='180px' 
              bg="neutral.15" 
              boxShadow="lg" 
              borderRadius='16' 
              mt='6' p="5" pb='5'
              display='flex' 
              flexDirection='column' 
              width='240px'
              >
                <Link href="/page/grading-standards" variant='subMenu'>Grading Standards</Link>
                <Link href="/page/shipping-guide" variant='subMenu'>Shipping Guide</Link>
              </Box>
            )}
          </Box>
          <NavLink href="/page/about" label='About' />
          <NavLink href="/page/contact" label='Contact Us' />
        </Box>
      </Box>
    </Box>

  )

}