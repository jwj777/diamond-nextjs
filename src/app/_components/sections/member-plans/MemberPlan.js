import { Box, Button, Link, Text } from "@chakra-ui/react";
import HeadlineLarge from "../../typography/HeadlineLarge";
import XlContainer from "@/app/_layout/containers/XlContainer";
import HeadlineSmall from "../../typography/HeadlineSmall";
import BodySuper from "../../typography/BodySuper";
import BodyLarge from "../../typography/BodyLarge";
import BodyMedium from "../../typography/BodyMedium";
import BodySmall from "../../typography/BodySmall";


export default function MemberPlan({ plan }) {

  console.log(plan)

  return(

    <Box 
      width='280px'
      bg='neutral.15' 
      pt='8'
      pb='10'
      px='6' 
      borderRadius='1.3rem' 
      textAlign='center'
      mx='3'
    >

      <Box mb='4'>
        <BodyLarge color='neutral.100'>{plan.attributes.Name}</BodyLarge>
      </Box>

      <Box mb='6'>
        <HeadlineLarge color='primary.90'>{plan.attributes.Price}</HeadlineLarge>
      </Box>

      <BodyMedium color='neutral.95'>
        <Text as='span' fontWeight='600'>
          {plan.attributes.Highlight}
        </Text>
      </BodyMedium>

      <Box mt='6' mb='8'>
        <Button variant='primaryDark'>Sign Up Today</Button>
      </Box>

      <Box>
        {
          plan.attributes.Features.map((feature, index) => {
            return(
              <Box mb='4'>
                <BodySmall key={index} color='neutral.90'>{feature.Text}</BodySmall>
              </Box>
            )
          })
        }
      </Box>

    </Box>

  )

}