'use client'
import { Box, Image, Link } from "@chakra-ui/react";
import XlContainer from "@/app/_layout/containers/XlContainer";
import SectionBackground from "../utilities/SectionBackground";
import HeadlineLarge from "../../typography/HeadlineLarge";
import BodyLarge from "../../typography/BodyLarge";


export default function TwoColImgText({ data }) {
  
  console.log('TwoColImgText')
  console.log(data.background)


  return (

    <SectionBackground data={data}>
      <XlContainer>

        <Box 
          display='flex' 
          justifyContent='space-between'
          alignItems='center'
          flexDirection={
            data.Text_Position == 'right' ? 'row-reverse' : 'row'
          }
          py='32'
        >

          <Box 
            maxW='2xl'
            pr='20'
          >
            <Box mb='8'>
              <HeadlineLarge color={data.background + '.on-background-heading'}>{data.Heading}</HeadlineLarge>
            </Box>
            <Box>
              <BodyLarge color={data.background + '.on-background'}>{data.Subheading}</BodyLarge>
            </Box>
            {
              data.Link ?
              <Box mt='16'>
                <Link href={data?.Link?.URL} variant={data.background}>{data?.Link?.Link_Text}</Link>
              </Box>
              : null
            }

          </Box>
          
          <Box 
            position="relative"
          >
            <Image 
              src={'https://windsordoor.s3.us-east-1.amazonaws.com/' + data.Image.data.attributes.hash + data.Image.data.attributes.ext}
              width='640px'
              height='580px'
              objectFit='contain'
              alt=""
            />
          </Box>
        
        </Box>

      </XlContainer>
    </SectionBackground>
    

  )

}

