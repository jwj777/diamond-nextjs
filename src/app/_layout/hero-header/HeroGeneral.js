'use client'
import { Box, Text } from "@chakra-ui/react";
import XlContainer from "../containers/XlContainer";
import BodyLarge from "@/app/_components/typography/BodyLarge";
import DisplayLarge from "@/app/_components/typography/DisplayLarge";
import PricingCards from "@/app/_components/sections/PricingCards";


export default function HeroGeneral({ data, colorScheme, children }) {

  // console.log('HeroGeneral')
  // console.log(process.env.BASE_URL + data.attributes.HeroImage.data.attributes.url)

  colorScheme = colorScheme ? colorScheme : 'neutralDark';

  return (

    <Box 
      display='flex'
      pt='16' pb='36' 
    >

      <XlContainer>
      <Box position='relative' zIndex='2'>
        <Box display='flex' justifyContent='space-between'>

          <Box>
            <Box maxW='3xl' mb='6'>
              <DisplayLarge color={colorScheme + '.on-surface'}>{data.attributes.Headline}</DisplayLarge>
            </Box>
            <Box maxW='4xl' flex='2'>
              <BodyLarge color={colorScheme + '.on-surface'}>{data.attributes.Subheading}</BodyLarge>
            </Box>
          </Box>

          <Box flex='2'></Box>

        </Box>
      </Box>

      </XlContainer>

    </Box>

  )

}