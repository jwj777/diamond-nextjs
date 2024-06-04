import MemberPlans from "@/app/_components/sections/member-plans/MemberPlans";
import PageContainer from "@/app/_layout/PageContainer";
import PageContainerGeneral from "@/app/_layout/PageContainerGeneral";
import Header from "@/app/_layout/hero-header/Header";
import { Box, Image } from "@chakra-ui/react";


export default async function PlanOrder() {

  let data = {}
  data['attributes'] = {}
  data['attributes']['Heading'] = 'stuff'

  console.log('data ---------')
  console.log(data)

  return (
 
    <Box>
      <Box bg='neutral.98' pb='24'>

        <Header data={data} />
        


      </Box>
    </Box>

  );
}