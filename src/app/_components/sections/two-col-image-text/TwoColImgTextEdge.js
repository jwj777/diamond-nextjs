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
            // pr='20'
            pr={ data.Image_Position == 'left' ? '24' : '0' }
            pl={ data.Image_Position == 'right' ? '24' : '0' }
          >
            <Box mb='8'>
              <HeadlineLarge color={data.background + '.on-background'}>{data.Heading}</HeadlineLarge>
            </Box>
            <Box>
              <BodyLarge color={data.background + '.on-background'}>{data.Body}</BodyLarge>
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
            // position="relative"
            pr={ data.Image_Position == 'left' ? '24' : '0' }
            pl={ data.Image_Position == 'right' ? '24' : '0' }
            overflow='hidden'       
            borderTopEndRadius={
              data.Image_Position == 'left' ? '1.5rem' : '0'
              }
            borderBottomEndRadius={
              data.Image_Position == 'left' ? '1.5rem' : '0'
              }
            borderBottomLeftRadius={
              data.Image_Position == 'left' ? '0' : '1.5rem'
              }
            borderTopLeftRadius={
              data.Image_Position == 'left' ? '0' : '1.5rem'
              }
          >
            <Image 
              src={'https://diamondgrade.s3.us-east-1.amazonaws.com/' + data.Image.data.attributes.hash + data.Image.data.attributes.ext}
              width='940px'
              height='auto'
              objectFit='contain'
              borderTopEndRadius={
                data.Image_Position == 'left' ? '1.5rem' : '0'
                }
              borderBottomEndRadius={
                data.Image_Position == 'left' ? '1.5rem' : '0'
                }
              borderBottomLeftRadius={
                data.Image_Position == 'left' ? '0' : '1.5rem'
                }
              borderTopLeftRadius={
                data.Image_Position == 'left' ? '0' : '1.5rem'
                }
              alt=""
            />
          </Box>
        
        </Box>

    </SectionBackground>
    

  )

}

