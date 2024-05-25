'use client'
import { Box, Image } from "@chakra-ui/react"
import XlContainer from "@/app/_layout/containers/XlContainer";
import HeadlineLarge from "../../typography/HeadlineLarge";
import BodyLarge from "../../typography/BodyLarge";
import TextCard from "./TextCard";
import DisplaySmall from "../../typography/DisplaySmall";


export default function ImageTextCards({ data }) {
  
  console.log('BasicCardList')
  console.log(data)

  return (

    <Box py='40'>
      <Box 
        display='flex'
        justifyContent={{ base: 'center', xl: 'flex-start' }}
      >
        <Box 
          display={{ base: 'none', xl: 'block' }}
          borderTopEndRadius='1.5rem'
          borderBottomEndRadius='1.5rem'
          height='960px'
          width='520px'
          overflow='hidden'
          mr='16'
        >
          <Image 
            src={'https://diamondgrade.s3.us-east-1.amazonaws.com/' + data.Image.data.attributes.hash + data.Image.data.attributes.ext}
            height='960px'
            width='520px'
            objectFit='cover'
            alt=""
          />
        </Box>
        <Box 
          maxW='4xl'
          mt='16' 
          pr={{ base: '0', xl: '20' }}
          px={{ base: '8', lg: '0' }}
        >  
          <Box mb='16'>
            <Box mb='4'>
              <DisplaySmall color='neutral.10'>{data.Heading}</DisplaySmall>
            </Box>
            <Box display={'flex'}>
              <Box>
                <BodyLarge>{data.Subheading}</BodyLarge>
              </Box>
            </Box>
          </Box>
          <Box 
            display='flex' 
            flexWrap='wrap' 
            alignItems={'stretch'}
            alignContent={'stretch'}
            ml='-4'
          >
            {
              data.Cards.map((card, index) => {
                return(
                  <TextCard key={index} data={card} />
                )
              })
            }
          </Box>
        </Box>
      </Box>
    </Box>

  )

}