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
import GradeElement from "./GradeElement";
import { useEffect, useState } from "react";
import BodySmall from "../../typography/BodySmall";
import TitleSmall from "../../typography/TitleSmall";


export default function GradeItems({ data, filter }) {

  console.log('GradeItems')

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
        <AccordionPanel pt='4' pb='4' px='8'>
          <Box maxW='700px'>
            <Box mb='8' maxW='lg'>
              <BodySmall>{data.attributes.Description}</BodySmall>
            </Box>
            <Box display='flex' flexWrap='wrap'>
              <GradeElement name={'Centering'} attribute={data.attributes.Centering} />
              <GradeElement name={'Corners'} attribute={data.attributes.Corners} />
              <GradeElement name={'Edging'} attribute={data.attributes.Edging} />
              <GradeElement name={'Surface'} attribute={data.attributes.Surface} />
              <GradeElement name={'Printing'} attribute={data.attributes.Printing} />
              <GradeElement name={'Imaging'} attribute={data.attributes.Imaging} />
            </Box>
            {
              data.attributes.Supplemental &&
              <Box mb='6' mr={{ base: '0', md: '12' }}>
                <TitleSmall mr='6px' mb='2px'>Supplemental</TitleSmall>
                <BodySmall color='neutral.40'>{data.attributes.Supplemental}</BodySmall>
            </Box>
            }  
          </Box>
        </AccordionPanel>
      </AccordionItem> 
    </Box>

  )

}