'use client'
import DisplayMedium from "@/app/_components/typography/DisplayMedium";
import { Box, Image } from "@chakra-ui/react";
import XlContainer from "../containers/XlContainer";
import BodyLarge from "@/app/_components/typography/BodyLarge";
import HeadlineLargeAlt from "@/app/_components/typography/HeadlineLargeAlt";


export default function HeroHome({ data, children }) {

  // console.log('HeroGeneral')
  // console.log(process.env.BASE_URL + data.attributes.HeroImage.data.attributes.url)

  return (

    <Box 
      display='flex'
      pt='32' pb='64' 
      background={'none'}
    >

          <XlContainer>
            <Box display='flex' flexDirection='column' justifyContent='center'>
              <Box mr='12' mb='10' maxW='520px' mx='auto'>
                <Image 
                  src="/logo-gold.png"
                  fill
                  alt=""
                />
              </Box>
              <Box display='flex' justifyContent='center' mb='4'>
                <HeadlineLargeAlt color='neutral.100'>Raising The Standard</HeadlineLargeAlt>
              </Box>
              <Box maxW='3xl' align='center' mx='auto'>
                <BodyLarge color='neutral.70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</BodyLarge>
              </Box>
            </Box>
          </XlContainer>

    </Box>

  )

}