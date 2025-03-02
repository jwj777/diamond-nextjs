'use client'
import DisplayMedium from "@/app/_components/typography/DisplayMedium";
import { Box, Image } from "@chakra-ui/react";
import XlContainer from "../containers/XlContainer";
import BodyLarge from "@/app/_components/typography/BodyLarge";
import HeadlineLargeAlt from "@/app/_components/typography/HeadlineLargeAlt";
import TradingCardList from "@/app/_components/sections/card-list/TradingCardList";
import HeadlineLarge from "@/app/_components/typography/HeadlineLarge";


export default function HeroHome({ data, children, cardList }) {

  // console.log('HeroGeneral')
  // console.log(process.env.BASE_URL + data.attributes.HeroImage.data.attributes.url)
  // console.log("cardList ", cardList)

  return (

    <Box 
      display='flex'
      pt={{ base: '20', sm: '24', md: '32' }} 
      pb={{ base: '20', sm: '24', md: '32' }} 
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
              <Box display='flex' justifyContent='center' textAlign='center' mb='4'>
                <HeadlineLarge color='neutral.100'>Raising The Standard</HeadlineLarge>
              </Box>
              <Box maxW='3xl' align='center' mx='auto'>
                <BodyLarge color='neutral.70'>There’s no higher evaluation than a Gem-Mint Diamond 10 graded card through DiamondGrade</BodyLarge>
              </Box>
            </Box>

            <Box mt='24'>
              <TradingCardList data={cardList[0]} />
            </Box>

          </XlContainer>

    </Box>

  )

}