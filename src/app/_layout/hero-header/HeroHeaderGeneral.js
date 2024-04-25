'use client'
import { Box, LinkBox, Text } from "@chakra-ui/react";
import Header from "./Header";
import HeroGeneral from "./HeroGeneral";


export default function HeroHeaderGeneral({ data, children, contentType }) {

  // console.log('HeaderHeroGeneral')
  // console.log(data)

  return (

    <Box bg='neutral.4'>

      <Box>
        <Header />
      </Box>

      <Box>
        <HeroGeneral data={data} />
      </Box>

    </Box>

  )

}