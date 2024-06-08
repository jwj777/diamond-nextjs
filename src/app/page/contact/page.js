import ContactForm from "@/app/_components/form/ContactForm";
import Test from "@/app/_components/form/Test";
import GradeAccordion from "@/app/_components/sections/grading-standards/GradeAccordion";
import PageContainerGeneral from "@/app/_layout/PageContainerGeneral";
import XlContainer from "@/app/_layout/containers/XlContainer";
import { Box, Image } from "@chakra-ui/react";


export default async function Contact({ params }) {

  const data = await getPage(params);

  console.log('GradingStandards')
  console.log(data)

  return (
 
    <PageContainerGeneral data={data}>
      
      <Box bg={'neutral.4'}>
        <XlContainer>
        <Box>
          <ContactForm />
        </Box>
        </XlContainer>
      </Box>


    </PageContainerGeneral>

  );
}

async function getPage(params) {
  try {
    const slug = params.slug;
    const response =
      await fetch(process.env.BASE_URL + `/api/general-pages/7?[populate]=*`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const pages = await response.json();

    // console.log(pages)

    return pages?.data;
  } catch (error) {
    console.error("Error fetching pages data:", error);
    throw new Error("Failed to fetch data");
  }
}
