'use client'
import { Box, LinkBox, Text } from "@chakra-ui/react";
import Header from "./Header";
import HeroGeneral from "./HeroGeneral";
import HeroHome from "./HeroHome";
import HeroHomeFixedPrice from "./HeroHomeFixedPrice";


export default function HeroHeaderHome({ data, promotions, cardList }) {

  // console.log('HeaderHeroGeneral')
  // console.log(data)
  // console.log('home promotions  ', promotions)

  let activePromotion

  promotions.map((promotion, index) => {
    if (promotion.attributes.Promotion_Status === 'Active') {
      activePromotion = promotion 
    } else {
      activePromotion = null
    }
  })

  // console.log('Active Promottion ', activePromotion)

  return (

    <Box 
      bg='url(https://diamondgrade.s3.us-east-1.amazonaws.com/homepage_bg_image_45ae0d8842.png)'
      backgroundPosition='50% 50%'
      backgroundSize='cover'
    >

      <Box>
        <Header />
      </Box>

      <Box>
        {
          activePromotion ?
          <HeroHomeFixedPrice data={data} activePromotion={activePromotion} cardList={cardList} />
          : <HeroHome data={data} cardList={cardList} />
        }
      </Box>

    </Box>

  )

}