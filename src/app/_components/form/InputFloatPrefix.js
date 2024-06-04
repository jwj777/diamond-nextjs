import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import LabelActiveLight from "./LabelActiveLight";

export default function InputFloatWithPrefix({
  label,
  id,
  type,
  pattern,
  errorMsg,
  width,
  required,
  value,
  onChange,
}) {
  const [inputState, setInputState] = useState("empty");

  const handleOnBlur = (element) => {
    element.target.value < 1
      ? setInputState("empty")
      : setInputState("has-value");
  };

  const handleOnFocus = (element) => {
    setInputState("focus");
  };

  const handleOnClick = (element, id) => {
    setInputState("focus");
    document.getElementById(id).focus();
  };

  let inputWidth;
  width ? (inputWidth = width) : (inputWidth = "100%");

  return (
    <FormControl mb={{ base: "3", sm: "5" }}>
      <InputGroup>
        <InputLeftElement pointerEvents="none" color="neutral.10" fontSize="1.2em" mt='0.9rem' pl='3'>
          $
        </InputLeftElement>
        <Input
          type={type}
          id={id}
          name={id}
          bg="neutral.90"
          minLength="1"
          fontSize={{ base: '1.1rem', sm: '1.3rem' }}
          fontWeight='600'
          height='16'
          variant="lightInput"
          borderColor="neutral.80"
          color="neutral.10"
          width={inputWidth}
          pattern={pattern}
          value={value}
          onBlur={(e) => handleOnBlur(e)}
          onFocus={(e) => handleOnFocus(e)}
          onChange={onChange}
          isRequired={required}
          pl="2.5rem" // Adjust padding to make space for the dollar sign
        />
      </InputGroup>

      {inputState === "has-value" || inputState === "focus" ? (
        <LabelActiveLight label={label} />
      ) : (
        <FormLabel
          htmlFor={id}
          color="neutral.10"
          fontSize={{ base: "1rem", sm: "1.15rem", md: "1.15rem" }}
          position="absolute"
          borderColor="neutral.80"
          bottom={{ base: "8px", sm: "10px", md: "10px" }}
          pl={{ base: "1rem", sm: "2.5rem" }}
          zIndex="2"
          onClick={(e) => handleOnClick(e, id)}
        >
          {label}
        </FormLabel>
      )}

      <FormHelperText></FormHelperText>
      <FormErrorMessage>{errorMsg}</FormErrorMessage>
    </FormControl>
  );
}
