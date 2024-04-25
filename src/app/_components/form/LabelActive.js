import { FormLabel} from "@chakra-ui/react";

export default function LabelActive({ label, id }) {

  return (
 
    <FormLabel 
      htmlFor={id} 
      color='tertiary.60'
      background='white'
      fontWeight='500'
      fontSize={{ base: '0.75rem', sm: '0.85rem' }}
      ml='0.8rem'
      pt={{ base: '2px', sm: '3px' }}
      px='12px'
      position='absolute'
      bottom={{ base: '2.4rem', sm: '3.3rem', md: '3.3rem' }}
      left={{ base: '-7px', sm: '0' }}
      borderRadius='4px'
      transitionDuration='0.3s'
      transitionTimingFunction='ease'
      animation='
      fadeup 0.15s;
      @keyframes fadeup {
        0% { transform: translateY(0.4rem); }
        100% { transform: translateY(0); }
      }'
    >
      {label}
    </FormLabel>

  );
}