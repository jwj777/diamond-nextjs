'use client'
import { Box, Button, Select, Textarea } from "@chakra-ui/react";
import TitleLarge from "../typography/TitleLarge";
import InputFloat from "./inputFloat";
import { useState } from "react";
import HeadlineMedium from "../typography/HeadlineMedium";
import BodyLarge from "../typography/BodyLarge";

export default function ContactForm({ data }) {

  const [formSubmit, setFormSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    !formSubmit ? setFormSubmit(true) : setFormSubmit(false)

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      help: e.target.help.value,
      comment: e.target.comment.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = 'https://hooks.zapier.com/hooks/catch/8026392/2u42zj1/';

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


  return (

    <Box className='contactForm' maxW='600px' mb='32' mx='2' bg='neutral.15' p='10' pb='16' borderRadius='20'>

      <Box mb='8'>
        <TitleLarge color='neutral.95'>Contact Diamond Grade Today</TitleLarge>
      </Box>
      {
        formSubmit ? 
        <Box pt='8' pb='16'>
          <BodyLarge color='neutral.100'>{`Thank you for contacting us. We'll respond to you as soon as possible.`}</BodyLarge>
        </Box>
        :
        <form onSubmit={handleSubmit}>
          <Box>
            <InputFloat label="Name" id={"name"} type={"text"} required={true} />
            <InputFloat label="Email" id={"email"} type={"text"} required={true} />
            <Box mb='4'>
            <Select 
              id='help'
              placeholder='How Can We Help' 
              bg='neutral.20' 
              color='neutral.90' 
              borderColor='neutral.40' 
              fontSize='1.2rem' 
              h='16' 
              borderRadius='8'
            >
              <option value='option1'>Membership Questions</option>
              <option value='option2'>Account Questions</option>
              <option value='option3'>Card Grading</option>
              <option value='option3'>Sales</option>
              <option value='option3'>Shipping</option>
              <option value='option3'>Website or Technical Issues</option>
              <option value='option3'>Other</option>
            </Select>
            </Box>
            <Textarea
              id='comment' 
              name='comment' 
              bg='neutral.20'
              color='neutral.95'  
              borderRadius='0.5rem'
              border='1px'
              borderColor='neutral.40'
              placeholder='Additional comments'
              size='lg'
              height='120px'
              mt='1'
              p='5'
            />

          </Box>
          
          <Button 
            mt="8" 
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
      }
    </Box>

  )

}

