import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import MobileNavLink from './MobileNavLink'


export default function MobileResources({ color }) {

  return (
    <Accordion 
      defaultIndex={[1]} 
      allowMultiple 
      borderRadius='2rem' 
      bg='neutral.12'
      mb='6'
    >
      <AccordionItem border='0'>
          <AccordionButton 
            color='neutral.90' 
            bg='neutral.20'
            py='5'
            px='8'
            borderRadius='10rem'
            _hover={{ color: 'neutral.100' }}
          >
            <Box as="span" flex='1' textAlign='left'>
              Resources
            </Box>
            <AccordionIcon />
          </AccordionButton>
        <AccordionPanel pb={4}>
          <Box mt='6' ml='4'>
            <MobileNavLink href='/page/services' label='Grading Standards' color={color} />
            <MobileNavLink href='/page/shipping-guide' label='What We Grade' color={color} />
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}