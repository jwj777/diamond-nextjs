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
          alignItems='center'
          flexDirection={{
            base: data.Image_Position == 'left' ? 'column-reverse' : 'column', 
            lg: data.Image_Position == 'left' ? 'row-reverse' : 'row' 
          }}
          justifyContent={
            data.Image_Position == 'left' ? 'left' : 'right'
          }
          py='36'
        >

          <Box 
            maxW='3xl'
            pr={{ 
              base: data.Image_Position == 'left' ? '8' : '8',
              lg: data.Image_Position == 'left' ? '24' : '0',
            }}
            pl={{ 
              base: data.Image_Position == 'right' ? '8' : '8',
              lg: data.Image_Position == 'right' ? '24' : '0',
            }}
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
            pr={{ 
              base: data.Image_Position == 'left' ? '8' : '0',
              lg: data.Image_Position == 'left' ? '24' : '0' 
            }}
            pl={{ 
              base: data.Image_Position == 'right' ? '8' : '0',
              lg: data.Image_Position == 'right' ? '24' : '0' 
            }}
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
              mt={{
                base: data.Image_Position == 'left' ? '0' : '8',
                lg: data.Image_Position == 'left' ? '0' : '16'
              }}
              mb={{
                base: data.Image_Position == 'left' ? '8' : '0',
                lg: data.Image_Position == 'left' ? '16' : '0'
              }}
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

