import { Box, Text } from "@chakra-ui/react";
import HeadlineLarge from "../../typography/HeadlineLarge";
import XlContainer from "@/app/_layout/containers/XlContainer";
import MemberPlan from "./MemberPlan";


export default function MemberPlans({ plans }) {

  // console.log(plans)

  return(

    <XlContainer>
      <Box display='flex' ml='-4' pb='32'>
        {
          plans.map((plan, index) => {
            return(
              <MemberPlan key={index} plan={plan} />
            )
          })
        }
      </Box>
    </XlContainer>
  )

}