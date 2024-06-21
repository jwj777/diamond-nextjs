import { FormErrorMessage, FormHelperText, FormLabel, Input, FormControl } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import LabelActive from "./LabelActive";
import LabelActiveLight from "./LabelActiveLight";

export default function InputFloatLight({ label, id, type, pattern, errorMsg, width, required, value, onChange, resetState }) {

  const [inputState, setInputState] = useState('empty')

  useEffect(() => {
    if (resetState) {
      setInputState('empty');
    }
  }, [resetState]);

  const handleOnBlur = (element) => {
    element.target.value < 1 ? setInputState("empty") : setInputState("has-value")
  }

  const handleOnFocus = (element) => {
    setInputState("focus")
  }

  const handleOnClick = (element, id) => {
    setInputState("focus")
    document.getElementById(id).focus();
  }

  let inputWidth
  width ? inputWidth = width : inputWidth = '100%'

  return (
 
      <FormControl mb={{ base: '3', sm: '5' }}>
        <Input 
          type={type} id={id} 
          name={id} 
          bg='neutral.90'
          minLength="1"
          size={{ base: 'lg', sm: 'xl', md: 'xl' }}
          variant='lightInput'
          borderColor='neutral.80'
          color='neutral.10'
          width={inputWidth}
          pattern={pattern}
          value={value}
          onBlur={(e) => handleOnBlur(e)} 
          onFocus={e => handleOnFocus(e)} 
          onChange={onChange}
          isRequired={required}
        />

        {
          inputState == 'has-value' || inputState == 'focus' && !resetState ? 
            <LabelActiveLight label={label} /> 
          :  
            <FormLabel 
              htmlFor={id} 
              color='neutral.10'
              fontSize={{ base: '1rem', sm: '1.15rem', md: '1.15rem' }}
              position='absolute'
              borderColor='neutral.80'
              bottom={{ base: '8px', sm: '10px', md: '10px' }}
              pl={{ base: '1rem', sm: '1.4rem' }}
              zIndex='2'
              onClick={e => handleOnClick(e, id)} 
            >
              {label}
            </FormLabel>
        }

        <FormHelperText></FormHelperText>
        <FormErrorMessage>{errorMsg}</FormErrorMessage>
      </FormControl>

  );
}