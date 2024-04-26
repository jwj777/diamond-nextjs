'use client'
import { Box } from "@chakra-ui/react";
import TradingCard from "./BasicCard";
import XlContainer from "@/app/_layout/containers/XlContainer";
import BasicCard from "./BasicCard";
import HeadlineLarge from "../../typography/HeadlineLarge";
import BodyLarge from "../../typography/BodyLarge";


export default function BasicCardList({ data }) {
  
  console.log('BasicCardList')
  console.log(data)

  return (

    <Box py='40'>
      <XlContainer>
        <Box mb='12'>
          <Box mb='4'>
            <HeadlineLarge color='neutral.10'>{data.Heading}</HeadlineLarge>
          </Box>
          <BodyLarge>{data.Subheading}</BodyLarge>
        </Box>
        <Box display='flex' justifyContent='space-between'>
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