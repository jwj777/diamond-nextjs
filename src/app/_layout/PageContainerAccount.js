'use client'
import { Box, Text } from "@chakra-ui/react";
import HeroHeaderAccount from "./hero-header/HeroHeaderAccount";


export default function PageContainerAccount({ data, children, contentType }) {

  return (

    <Box bg={'neutral.10'} pb='16'>
      <HeroHeaderAccount data={data} />
      {children}
    </Box>

  )

}