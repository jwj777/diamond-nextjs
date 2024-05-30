import XlContainer from "@/app/_layout/containers/XlContainer";
import { 
  Box,
} from "@chakra-ui/react";
import TitleSmall from "../../typography/TitleSmall";
import BodyMedium from "../../typography/BodyMedium";
import BodySmall from "../../typography/BodySmall";


export default function GradeElement({ name, attribute }) {

  // console.log('GradeItems')
  // console.log(data)

  return (

    <Box mb='6' mr={{ base: '0', md: '12' }} width='300px'>
      <TitleSmall mr='6px' mb='2px'>{name}</TitleSmall>
      <BodySmall color='neutral.40'>{attribute}</BodySmall>
    </Box>
   
  )

}