'use client'
import { Box, Image, Link } from "@chakra-ui/react";
import XlContainer from "@/app/_layout/containers/XlContainer";
import SectionBackground from "../utilities/SectionBackground";
import HeadlineLarge from "../../typography/HeadlineLarge";
import BodyLarge from "../../typography/BodyLarge";
import BodyMedium from "../../typography/BodyMedium";


export default function TwoColImgTextEdge({ data }) {
  
  console.log('TwoColImgText')
  console.log(data.Image)


  return (

    <SectionBackground data={data}>

        <Box 
          display='flex' 
          // justifyContent='flex-start'
          alignItems='center'
          flexDirection={
            data.Image_Position == 'left' ? 'row-reverse' : 'row'
          }
          py='32'
        >

          <Box 
            maxW='3xl'
            pr='20'
          >
            <Box mb='8'>
              <HeadlineLarge color={data.background + '.on-background'}>{data.Heading}</HeadlineLarge>
            </Box>
            <Box>
              <BodyMedium color={data.background + '.on-background'}>{data.Body}</BodyMedium>
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
            pr='24'
          >
            <Image 
              src={'https://diamondgrade.s3.us-east-1.amazonaws.com/' + data.Image.data.attributes.hash + data.Image.data.attributes.ext}
              width='940px'
              height='580px'
              objectFit='contain'
              alt=""
            />
          </Box>
        
        </Box>

    </SectionBackground>
    

  )

}

