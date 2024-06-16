import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import MobileNavLink from './MobileNavLink'


export default function MobileCarriers({ data }) {

  return (
    <Accordion 
      defaultIndex={[1]} 
      allowMultiple 
      borderRadius='2rem' 
      bg='neutral.12'
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
              Carriers
            </Box>
            <AccordionIcon />
          </AccordionButton>
        <AccordionPanel pb={4}>
          <Box mt='6' ml='4'>
            <MobileNavLink href='/service/fuel-card-program' label='Fuel Card Program' data={data} />
            <MobileNavLink href='/service/factoring' label='Factoring Services' data={data} />
            <MobileNavLink href='/service/dispatch-services' label='Dispatch Services' data={data} />
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}