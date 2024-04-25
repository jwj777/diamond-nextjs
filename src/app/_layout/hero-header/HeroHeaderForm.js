'use client'
import { Box, LinkBox, Text } from "@chakra-ui/react";
import Header from "./Header";
import HeroGeneral from "./HeroGeneral";
import { Herr_Von_Muellerhoff } from "next/font/google";
import HeroForm from "./HeroForm";


export default function HeroHeaderForm({ data, children }) {

  // console.log('HeaderHeroGeneral')
  // console.log(data)

  return (

    <Box bg='neutral.4'>

      <Box>
        <Header />
      </Box>

      <Box>
        <HeroForm data={data} />
      </Box>

    </Box>

  )

}