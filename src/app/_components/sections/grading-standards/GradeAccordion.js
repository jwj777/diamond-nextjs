'use client'
import XlContainer from "@/app/_layout/containers/XlContainer";
import { 
  Box, 
  Button,
  Accordion
} from "@chakra-ui/react";
import GradeItems from "./GradeItems";
import FilterButton from "./FilterButton";
import TitleMedium from "../../typography/TitleMedium";
import { useState } from "react";


export default function GradeAccordion({ gradeData }) {

  // console.log('GradeAccordion')
  // console.log(gradeData)

  const [filter, setFilter] = useState(null)

  const updateFilter = (attribute) => {
    console.log('updateFilter', attribute)
    setFilter(attribute)
  }

  gradeData.sort((a, b) => {
    return parseInt(b.attributes.Grade_Number) - parseInt(a.attributes.Grade_Number);
  });

  return (

    <Box pt='16' pb='24'>
      <XlContainer>
        <Box display='flex' alignItems='flex-start'>

          <Box width='100%'>
            <Accordion allowToggle maxW='3xl' borderRadius='2.5rem' border='0px'>
              {
                gradeData.map((item, index) => {
                  return(
                    <GradeItems key={index} data={item} filter={filter} />
                  )
                })
              }
            </Accordion>
          </Box>
          

          <Box 
            maxW='400px'
            bg='neutral.95' 
            p='6'
            px='8' 
            borderRadius='2rem'
          >
            <Box mb='6'>
              <TitleMedium>Compare Grades by Attribute</TitleMedium>
            </Box>
            <Box display='flex' flexWrap='wrap'>
              <FilterButton label='All / Reset' updateFilter={updateFilter} />
              <FilterButton label='Centering' updateFilter={updateFilter} />
              <FilterButton label='Corners' updateFilter={updateFilter} />
              <FilterButton label='Edging' updateFilter={updateFilter} />
              <FilterButton label='Surface' updateFilter={updateFilter} />
              <FilterButton label='Printing' updateFilter={updateFilter} />
              <FilterButton label='Supplemental' updateFilter={updateFilter} />
            </Box>
          </Box>

        </Box>
      </XlContainer>
    </Box>

  )

}