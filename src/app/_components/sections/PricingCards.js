'use client'
import { Box, Image, Text } from "@chakra-ui/react";
import PricingCard from "../card/PricingCard";


export default function PricingCards({ data }) {
  
  // console.log('Trading Card')
  // console.log(data.CardImage.data.attributes.url)

  return (

    <Box display='flex' flexWrap='wrap' mx='2'>
      <Box>
        <PricingCard title='Standard' price='Free' >
          <Text as='span' color='neutral.95'>Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </Text>
        </PricingCard>
      </Box>
      <Box>
        <PricingCard title='Diamond Club' price='$39.99' >
          <Text as='span' color='neutral.95'>Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </Text>
        </PricingCard>
      </Box>
      <Box>
        <PricingCard title='Diamond Premium' price='$79.99' >
          <Text as='span' color='neutral.95'>Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </Text>
        </PricingCard>
      </Box>
      <Box>
        <PricingCard title='Dealer&apos;s Club' price='$99.99' >
          <Text as='span' color='neutral.95'>Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </Text>
        </PricingCard>
      </Box>
    </Box>

  )

}

