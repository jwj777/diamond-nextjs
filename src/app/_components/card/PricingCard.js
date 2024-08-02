'use client'
import { Box, Image, Text } from "@chakra-ui/react";
import TitleLarge from "../typography/TitleLarge";
import HeadlineLarge from "../typography/HeadlineLarge";
import BodyMedium from "../typography/BodyMedium";
import BodySmall from "../typography/BodySmall";


export default function PricingCard({ data, title, price, children, highlight, features, isAnnual, product }) {
  
  console.log("product ", product)

  return (

    <Box 
      width={{
        base: '100%', 
        md: '314px' 
      }}
      mx='2' 
      bg='neutral.15' 
      pb='8' 
      borderRadius='20' 
      textAlign={'center'} 
      height='100%'
    >
      <Box px='5' pt='10'>
        <TitleLarge color='neutral.90'>{title}</TitleLarge>
        <Box mt='6'>
          <HeadlineLarge color='primary.90'>{product.id == 'prod_QXnFIxIXPwSySv' ? 'Free' : price}</HeadlineLarge>
        </Box>
        {
          title === 'Standard' ?  
          <Box mb='53px'>
          </Box>      
          :
          <Box opacity='0.9' mt='-4'>
            <BodyMedium color='primary.90'>{isAnnual ? 'Per Year' : 'Per Month'}</BodyMedium>
          </Box>
        }
        <Box mt='7' mb='6'>
          <BodyMedium color='neutral.90'>
            Estimated Turnaround Time: 
          </BodyMedium>
          <BodyMedium color='neutral.95'>
            <Text fontWeight='400'>
              {highlight}
            </Text>
          </BodyMedium>
        </Box>
        {children}

        {
          features.map((feature, index) => {
            return(
              <Box key={index} mb='4'>
                <BodyMedium color='neutral.100'>{feature.Text}</BodyMedium>
              </Box>
            )
          })
        }
      </Box>
    </Box>

  )

}

