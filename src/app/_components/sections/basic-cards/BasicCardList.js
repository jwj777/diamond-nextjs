'use client'
import { Box } from "@chakra-ui/react";
import TradingCard from "./BasicCard";
import XlContainer from "@/app/_layout/containers/XlContainer";
import BasicCard from "./BasicCard";
import HeadlineLarge from "../../typography/HeadlineLarge";
import BodyLarge from "../../typography/BodyLarge";


export default function BasicCardList({ data }) {
  
  // console.log('BasicCardList')
  // console.log(data)

  return (

    <Box py='40'>
      <XlContainer>
        <Box mb='16'>
          <Box mb='4' textAlign={'center'}>
            <HeadlineLarge color='neutral.10'>{data.Heading}</HeadlineLarge>
          </Box>
          <Box display={'flex'} justifyContent={'center'}>
            <Box maxW='4xl' textAlign={'center'}>
              <BodyLarge>{data.Subheading}</BodyLarge>
            </Box>
          </Box>
        </Box>
        <Box 
          display='flex' 
          flexWrap='wrap' 
          justifyContent={'center'}
        >
          {
            data.Cards.map((card, index) => {
              return(
                <BasicCard key={index} data={card} />
              )
            })
          }
        </Box>
      </XlContainer>
    </Box>

  )

}