'use client'
import XlContainer from "@/app/_layout/containers/XlContainer";
import { Box, Image, Text } from "@chakra-ui/react";


export default function TextSection({ data }) {
  
  // console.log('Trading Card')
  // console.log(data.CardImage.data.attributes.url)

  return (

      <XlContainer>
        <Box pt='12' pb='24' className='ckEditor'>
          <div dangerouslySetInnerHTML={{ __html: data.Body }}></div>
        </Box>
      </XlContainer>

  )

}
