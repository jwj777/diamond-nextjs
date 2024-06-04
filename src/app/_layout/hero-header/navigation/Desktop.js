'use client'
import { Box, Link } from "@chakra-ui/react";
import NavLink from "./NavLink";
import React, { useState, useRef, useEffect } from 'react';

export default function Desktop() {

  const [isSubMenuVisible, setSubMenuVisible] = useState(false);
  const navRef = useRef(); // Ref for the menu to handle clicks outside

  // Toggle submenu visibility
  const toggleSubMenu = () => {
    console.log('toggleSubMenu')
    setSubMenuVisible(!isSubMenuVisible);
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

    <Box ref={navRef}>
      <Box
        display='flex'
      >
        <NavLink href="/page/pricing" label='Services & Prices' />
        <Box>
          <NavLink href="#" label='Resources' onClick={toggleSubMenu} isSubMenuVisible={isSubMenuVisible} dropDown={true} />
          {isSubMenuVisible && (
            <Box position="absolute" bg="white" boxShadow="md" borderRadius='16' mt='8' p="4" display='flex' flexDirection='column'>
              <Link href="/page/grading-standards" variant='noDeco'>Grading Standards</Link>
              {/* <Link href="/page/philosophy" variant='noDeco'>Philosophy</Link> */}
              <Link href="/page/faq" variant='noDeco'>FAQs</Link>
            </Box>
          )}
        </Box>
        <NavLink href="/page/about" label='About' />
        <NavLink href="/page/contact" label='Contact Us' />
      </Box>


    </Box>

  )

}