'use client'
import { Box, Image, Text, Button, Select } from "@chakra-ui/react";
import TitleLarge from "../typography/TitleLarge";
import HeadlineLarge from "../typography/HeadlineLarge";
import BodyLarge from "../typography/BodyLarge";
import BodyMedium from "../typography/BodyMedium";
import InputFloat from "./inputFloat";
import { useState } from "react";


export default function ContactForm({ data }) {

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

    <Box maxW='600px' mt='8' mb='16' mx='2' bg='neutral.15' p='10' pb='16' borderRadius='20'>

      <Box mb='8'>
        <TitleLarge color='neutral.95'>Contact Diamond Grade Today</TitleLarge>
      </Box>

      <form onSubmit={handleSubmit}>
        <Box>

          <InputFloat label="First Name" id={"firstName"} type={"text"} pattern={"^[A-Za-z]+$"} required={true} />
          <InputFloat label="Last Name" id={"lastName"} type={"text"} pattern={"^[A-Za-z]+$"} required={true} />
          <InputFloat label="Email" id={"email"} type={"text"} pattern={"^[A-Za-z]+$"} required={true} />
          <InputFloat label="Phone" id={"phone"} type={"text"} pattern={"^[A-Za-z]+$"} required={true} />

        </Box>
        
        <Button 
          mt="4" 
          size={{ base: 'md', md: 'lg' }} 
          // variant="primaryLight" 
          type="submit" 
          py='7'
          bg='primary.90'
          color='neutral.10'
          borderRadius='64'
          _hover={{
            bg: 'neutral.20',
          }}
        >
          {'Submit'}
        </Button>
      
      </form>
     
    </Box>

  )

}

