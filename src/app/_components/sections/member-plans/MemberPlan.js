import { Box, Button, Link, Text } from "@chakra-ui/react";
import HeadlineLarge from "../../typography/HeadlineLarge";
import XlContainer from "@/app/_layout/containers/XlContainer";
import HeadlineSmall from "../../typography/HeadlineSmall";
import BodySuper from "../../typography/BodySuper";
import BodyLarge from "../../typography/BodyLarge";
import BodyMedium from "../../typography/BodyMedium";


export default function MemberPlan({ plan }) {

  console.log(plan)

  return(

    <Box 
      width='280px'
      bg='neutral.10' 
      pt='8'
      pb='10'
      px='6' 
      borderRadius='2rem' 
      textAlign='center'
      mx='4'
    >

      <Box mb='4'>
        <BodyLarge color='neutral.100'>{plan.attributes.Name}</BodyLarge>
      </Box>

      <Box>
        <HeadlineLarge color='primary.90'>{plan.attributes.Price}</HeadlineLarge>
      </Box>

      <BodyMedium color='neutral.80'>
        <Text as='span' fontWeight='600'>
          {plan.attributes.Highlight}
        </Text>
      </BodyMedium>

      <Box mt='6'>
        <Button variant='primaryDark'>Add to Cart</Button>
      </Box>

    </Box>

  )

}