'use client'
import { Box, LinkBox, Text } from "@chakra-ui/react";
import Header from "./Header";
import HeroGeneral from "./HeroGeneral";


export default function HeroHeaderGeneral({ data, colorScheme }) {

  // console.log('HeaderHeroGeneral')
  // console.log(data)

  colorScheme = colorScheme ? colorScheme : 'neutralDark';

  return (

    <Box bg='neutral.4'>

      <Box>
        <Header colorScheme={colorScheme} />
      </Box>

      <Box>
        <HeroGeneral data={data} colorScheme={colorScheme} />
      </Box>

    </Box>

  )

}