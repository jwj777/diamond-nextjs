import XlContainer from "@/app/_layout/containers/XlContainer";
import { 
  Box, 
  Text,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, 
} from "@chakra-ui/react";
import TitleMedium from "../../typography/TitleMedium";
import BodyMedium from "../../typography/BodyMedium";
import GradeElement from "./GradeElement";
import { useEffect, useState } from "react";
import TitleSmall from "../../typography/TitleSmall";
import BodySmall from "../../typography/BodySmall";


export default function GradeItems({ data, filter }) {

  console.log('GradeItems')
  // console.log(filter)

  let filterFormated

  if (filter == 'Centering Front') {
    filterFormated = 'Centering_Front'
  } else if (filter == 'Centering Back') {
    filterFormated = 'Centering_Back'
  } else {
    filterFormated = filter
  }

  const [filterVariable, setFilterVariable] = useState(null);

  useEffect(() => {
    const filterVariable = data.attributes[filterFormated];
    setFilterVariable(filterVariable);
    console.log(filterVariable)
  }, [filterFormated]);

  
  return (

    <Box mb='4' width='100%'>
      <AccordionItem bg='neutral.95' border='0px' borderRadius='2.5rem' width='100%'>
        <h2>
          <AccordionButton 
            borderRadius='2rem' 
            px='8'
            py='3'
          >
            <Box 
              display='flex'
              as='span' 
              flex='1' 
              textAlign='left'
              mt='2' 
              mr='16'
            >
              <Box width='268px'>
                <TitleMedium><Text as='span' mr='2'>{data.attributes.Grade_Name}</Text>{data.attributes.Grade_Number}</TitleMedium>
              </Box>
              <Box width='300px' pb='3'>
                <Text fontWeight='600' mb='1'>{filter == 'All / Reset' ? null : filter}</Text>
                <BodySmall color='neutral.10'>{filterVariable}</BodySmall>
              </Box>
            </Box>
            <AccordionIcon w='8' h='8' />
          </AccordionButton>
        </h2>
        <AccordionPanel pt='2' pb='4' px='8'>
          <Box maxW='580px'>
            <Box mb='6'>
              <BodySmall>{data.attributes.Description}</BodySmall>
            </Box>
            <Box display='flex'>
              <Box mr='16'>
                <GradeElement name={'Centering Front'} attribute={data.attributes.Centering_Front} />
              </Box>  
              <GradeElement name={'Centering Back'} attribute={data.attributes.Centering_Back} />
            </Box>
            <GradeElement name={'Corners'} attribute={data.attributes.Corners} />
            <GradeElement name={'Edging'} attribute={data.attributes.Edging} />
            <GradeElement name={'Surface'} attribute={data.attributes.Surface} />
            <GradeElement name={'Printing'} attribute={data.attributes.Printing} />
 
          </Box>
        </AccordionPanel>
      </AccordionItem> 
    </Box>

  )

}