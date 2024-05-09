import MemberPlans from "@/app/_components/sections/member-plans/MemberPlans";
import Sections from "@/app/_components/sections/sections-array/Sections";
import PageContainerGeneral from "@/app/_layout/PageContainerGeneral";
import { Box, Image } from "@chakra-ui/react";


export default async function MemberPlansPage() {

  console.log('MemberPlansPage')

  const data = await getPage();
  const plans = await getPlans();

  return (
 
    <PageContainerGeneral data={data}>

      <Box bg='neutral.5' pb='24'>
        <MemberPlans plans={plans} />
      </Box>


    

    </PageContainerGeneral>

  );
}



async function getPage() {
  try {
    const response =
      await fetch(process.env.BASE_URL + `/api/general-pages/6?[populate]=*`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const page = await response.json();

    console.log(page)

    return page?.data;
  } catch (error) {
    console.error("Error fetching pages data:", error);
    throw new Error("Failed to fetch data");
  }
}

async function getPlans() {
  try {
    // const slug = params.slug;
    const response =
      await fetch(process.env.BASE_URL + `/api/member-plans?[populate]=*`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const plans = await response.json();

    console.log('plans')
    console.log(plans)


    return plans?.data;
  } catch (error) {
    console.error("Error fetching grade data:", error);
    throw new Error("Failed to fetch grade data");
  }
}