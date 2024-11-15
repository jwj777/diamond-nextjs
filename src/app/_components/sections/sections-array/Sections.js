'use client'
import { Box } from "@chakra-ui/react";
import TradingCard from "../card-list/TradingCard";
import TradingCardList from "../card-list/TradingCardList";
import BodyLarge from "../../typography/BodyLarge";
import TwoColImgTextEdge from "../two-col-image-text/TwoColImgTextEdge";
import BasicCardList from "../basic-cards/BasicCardList";
import ImageTextCards from "../image-text-cards/ImageTextCards";
import ShippingGuide from "../shipping-guide/ShippingGuide";
import TextSection from "../TextSection";


export default function Sections({ data }) {
  
  // console.log('Sections')
  // console.log(data)

  return (

    <Box>
      {
        data.__component == 'section.two-column-image-text-edge' ?
          <TwoColImgTextEdge data={data} />
        : data.__component == 'section.section-basic-cards-2' ?
          <BasicCardList data={data} />
        : data.__component == 'section.image-and-text-cards' ?
          <ImageTextCards data={data} />
        : data.__component == 'section.shipping-guide' ?
          <ShippingGuide data={data} />
        : data.__component == 'section.text' ?
          <TextSection data={data} />
        // : data.__component == 'section.text' ?
        //   <TextSection data={data} />
        : null
      }
    </Box>

  )

}