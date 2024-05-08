'use client'
import DisplayMedium from "@/app/_components/typography/DisplayMedium";
import { Box, Text } from "@chakra-ui/react";
import XlContainer from "../containers/XlContainer";
import BodyLarge from "@/app/_components/typography/BodyLarge";
import DisplayLarge from "@/app/_components/typography/DisplayLarge";
import PricingCard from "@/app/_components/card/PricingCard";
import PricingCards from "@/app/_components/sections/PricingCards";


export default function HeroGeneral({ data, children }) {

  // console.log('HeroGeneral')
  // console.log(process.env.BASE_URL + data.attributes.HeroImage.data.attributes.url)

  return (

    <Box 
      display='flex'
      pt='24' pb='44' 
      // background={'neutral.4'}
    >

      <XlContainer>
      <Box position='relative' zIndex='2'>

        <Box display='flex' justifyContent='space-between'>

          <Box flex='2'>
            <Box width='3xl' mb='6'>
              <DisplayLarge color='neutral.98'>{data.attributes.Headline}</DisplayLarge>
            </Box>
            <Box width='6xl' flex='2'>
              <BodyLarge color='neutral.80'>{data.attributes.Subheading}</BodyLarge>
            </Box>
          </Box>

          <Box flex='2'></Box>

        </Box>

      </Box>


      {
        data.attributes.slug == 'pricing' ?
          <PricingCards />
        : null

      }


      </XlContainer>

    </Box>

  )

}