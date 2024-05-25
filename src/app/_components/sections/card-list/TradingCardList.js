'use client'
import { Box } from "@chakra-ui/react";
import TradingCard from "./TradingCard";
import XlContainer from "@/app/_layout/containers/XlContainer";


export default function TradingCardList({ data }) {
  
  // console.log('TradingCardList')
  // console.log(data)

  return (

    <XlContainer>
      <Box display={{ base: 'none', xl: 'flex' }} justifyContent='center'>
      {
        data.Cards.map((card, index) => {
          return(
            <TradingCard key={index} data={card} />
          )
        })
      }
      </Box>
    </XlContainer>

  )

}