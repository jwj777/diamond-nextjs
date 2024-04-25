import { FormErrorMessage, FormHelperText, FormLabel, Input, FormControl } from "@chakra-ui/react";
import { useState } from "react";
import LabelActive from "./LabelActive";

export default function InputFloat({ label, id, type, pattern, errorMsg, width, required, inputValue }) {

  const [inputState, setInputState] = useState('empty')

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
          bg='white'
          minLength="1"
          size={{ base: 'lg', sm: 'xl', md: 'xl' }}
          variant='lightInput'
          width={inputWidth}
          pattern={pattern}
          onBlur={(e) => handleOnBlur(e)} 
          onFocus={e => handleOnFocus(e)} 
          isRequired={required}
        />

        {
          inputState == 'has-value' || inputState == 'focus' ?
          <LabelActive label={label} /> :  
            <FormLabel 
              htmlFor={id} 
              color='neutralVariant.50'
              fontSize={{ base: '1rem', sm: '1.15rem', md: '1.15rem' }}
              position='absolute'
              bottom={{ base: '0.8rem', sm: '1.2rem', md: '1.2rem' }}
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