'use client'
import { Box, Image, Text, Button, Select } from "@chakra-ui/react";
import TitleLarge from "../typography/TitleLarge";
import HeadlineLarge from "../typography/HeadlineLarge";
import BodyLarge from "../typography/BodyLarge";
import BodyMedium from "../typography/BodyMedium";
import InputFloat from "./inputFloat";
import { useState } from "react";


export default function SubmitCardForm({ data }) {

  const [formSubmit, setFormSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    !formSubmit ? setFormSubmit(true) : setFormSubmit(false)

    const data = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      company: e.target.company.value,
      email: e.target.email.value,
      phone: e.target.phone.value
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    // const endpoint = 'https://hooks.zapier.com/hooks/catch/8026392/3fi7xo8/';

    // Form the request for sending data to the server.
    const options = {
      method: 'POST',
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);
 
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();

    if (data.email && data.phone) {
      sendGTMEvent({ event: 'contact_form_lead', value: 'form_submit' })
    }
        
  }
  
  console.log('SubmitCardForm')
  console.log(data)

  return (

    <Box maxW='680px' mt='24' mb='16' mx='2' bg='neutral.95' p='10' pb='16' borderRadius='20'>

      <Box mb='8'>
        <TitleLarge color='neutral.10'>{data?.attributes?.Form_Heading}</TitleLarge>
        <BodyMedium color='neutral.10'>{data?.attributes?.Form_Subheading}</BodyMedium>
      </Box>

      <form onSubmit={handleSubmit}>
        <Box>

        <InputFloat label="Player Name" id={"playername"} type={"text"} pattern={"^[A-Za-z]+$"} required={true} />
          <Box display='flex' flex='wrap' alignItems='center' flexDirection={{ base: 'column', md: 'row' }} required={true}>
            <Box mb='4' mr='4' minW='200px' h='16'>
              <Select placeholder='Card Brand' bg='neutral.100' fontSize='1.2rem' h='16' borderRadius='8'>
                <option value='option1'>Topps</option>
                <option value='option2'>Panini</option>
                <option value='option3'>Upper Deck</option>
                <option value='option3'>Bowman</option>
                <option value='option3'>Fleer</option>
                <option value='option3'>Donruss</option>
                <option value='option3'>Score</option>
                <option value='option3'>Other - conditional field</option>
              </Select>
            </Box>
       
            <Box mr='4' minW='160px'>
              <InputFloat label="Card Year" id={"cardyear"} type={"text"} pattern={"^[A-Za-z]+$"} required={true} />
            </Box>
            <Box mr='4' minW='160px'>
              <InputFloat label="Card Number" id={"cardnumber"} type={"text"} pattern={"^[A-Za-z]+$"} required={true} />
            </Box>
          
          </Box>

          <Box mr='4' minW='160px'>
            <InputFloat label="Description/Parallel/Variation" id={"cardnumber"} type={"text"} pattern={"^[A-Za-z]+$"} required={true} />
          </Box>

          <Box mr='4' minW='160px'>
            <InputFloat label="Declared Value" id={"declaredValue"} type={"text"} pattern={"^[A-Za-z]+$"} required={true} />
          </Box>

          <Box mr='4' maxW='320px'>
            <InputFloat label="Quantity" id={"quantity"} type={"text"} pattern={"^[A-Za-z]+$"} required={true} />
          </Box>




        </Box>
        
        <Button 
          mt="8" 
          size={{ base: 'md', md: 'lg' }} 
          // variant="primaryLight" 
          type="submit" 
          py='7'
          bg='primary.40'
          color='neutral.100'
          borderRadius='64'
          _hover={{
            bg: 'neutral.20',
          }}
        >
          {'Add to Order'}
        </Button>
      
      </form>
     
    </Box>

  )

}

