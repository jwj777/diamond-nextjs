import { Box, Image, Text } from "@chakra-ui/react";
import XlContainer from "@/app/_layout/containers/XlContainer";
import BodyMedium from "../../typography/BodyMedium";
import HeadlineMedium from "../../typography/HeadlineMedium";
import TitleLarge from "../../typography/TitleLarge";
import BodyLarge from "../../typography/BodyLarge";


export default function ShippingGuide({ data }) {

  console.log('ShippingGuide')
  console.log(data)

  return(

    <Box mt='16' mb='24'>
      <XlContainer>
        <Box>
          <Box maxW='4xl' mb='16'>
            <HeadlineMedium>{data.Heading}</HeadlineMedium>
            <BodyMedium>{data.Subheading}</BodyMedium>
          </Box>

          <Box>
          {
            data.Guides.map((item, index) => {
              return(
                <Box 
                  display='flex' 
                  alignItems='center'
                  mb='8' 
                  bg='neutral.95'
                  borderRadius='1.5rem' 
                >
                  
                  <Box width='320px' mr='8' overflow='hidden' borderTopLeftRadius='1.5rem' borderBottomLeftRadius='1.5rem'>
                    <Image 
                      src={
                        process.env.NEXT_PUBLIC_AWS_BASE_URL
                        + item.Image.data.attributes.hash
                        + item.Image.data.attributes.ext
                      }
                      objectFit='contain'
                    />
                  </Box>
                  <Box maxW='780px'>
                    <BodyLarge mb='4'>{item.Heading}</BodyLarge>
                    <BodyMedium>{item.Description}</BodyMedium>
                  </Box>
                </Box>
              )
            })
          }
          </Box>

        </Box>
      </XlContainer>
    </Box>

  )

}