'use client'
import { Box, Text } from "@chakra-ui/react";
import HeroHeaderGeneral from "./hero-header/HeroHeaderGeneral";
import HeroHeaderHome from "./hero-header/HeroHeaderHome";
import Footer from "./footer/Footer";
import PromotionBanner from "../_components/PromotionBanner";
import TopBanner from "../_components/promotions/TopBanner";


export default function PageContainerHome({ data, children, promotions, cardList }) {

  let activePromotion

  console.log('promotion.attributes.Promotion_Status ', promotions[0].attributes.Promotion_Status)

  promotions.map((promotion, index) => {
    if (promotion.attributes.Promotion_Status === 'Active' && promotion.attributes.Display_Top_Banner === 'On') {
      activePromotion = promotion 
    } else {
      activePromotion = null
    }
  })

  return (

    <Box>
      {
        activePromotion ?
        <TopBanner promotions={activePromotion} />
        : null
      }
      <HeroHeaderHome data={data} promotions={promotions} cardList={cardList} />
        {children}
      <Footer />
    </Box>

  )

}