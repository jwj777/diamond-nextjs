import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import MobileNavLink from './MobileNavLink'


export default function MobileGrading({ color }) {

  return (
    <Accordion 
      defaultIndex={[1]} 
      allowMultiple 
      borderRadius='2rem' 
      bg='neutral.15'
      mb='6'
    >
      <AccordionItem border='0'>
          <AccordionButton 
            color='neutral.90' 
            bg='neutral.20'
            py='4'
            px='8'
            borderRadius='10rem'
            _hover={{ color: 'neutral.100' }}
          >
            <Box as="span" flex='1' textAlign='left'>
              Card Grading
            </Box>
            <AccordionIcon />
          </AccordionButton>
        <AccordionPanel px='0' pb='2'>
          <Box mt='6' ml='4'>
            <MobileNavLink href='/page/pricing' label='Memberships & Pricing' color={color} />
            <MobileNavLink href='/page/services' label='What We Grade' color={color} />
            <MobileNavLink href='/page/shipping-fees' label='Shipping Fees' color={color}/>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}