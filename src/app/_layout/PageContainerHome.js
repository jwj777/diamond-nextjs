'use client'
import { Box, Text } from "@chakra-ui/react";
import HeroHeaderGeneral from "./hero-header/HeroHeaderGeneral";
import HeroHeaderHome from "./hero-header/HeroHeaderHome";
import Footer from "./footer/Footer";
import PromotionBanner from "../_components/PromotionBanner";


export default function PageContainerHome({ data, children, cardList }) {

  return (

    <Box>
      <PromotionBanner />
      <HeroHeaderHome data={data} cardList={cardList} />
      
        {children}

      <Footer />

    </Box>

  )

}