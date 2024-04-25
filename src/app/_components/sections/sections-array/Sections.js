'use client'
import { Box } from "@chakra-ui/react";
import TradingCard from "../card-list/TradingCard";
import TradingCardList from "../card-list/TradingCardList";
import BodyLarge from "../../typography/BodyLarge";


export default function Sections({ data }) {
  
  console.log('Sections')
  console.log(data)

  return (

    <Box>
      <BodyLarge>askjhdfkjds</BodyLarge>
      {
        data.__component = 'section.card-list' ?
        <TradingCardList data={data} />
        : null
      }
    </Box>

  )

}