import GradeAccordion from "@/app/_components/sections/grading-standards/GradeAccordion";
import Sections from "@/app/_components/sections/sections-array/Sections";
import BodyLarge from "@/app/_components/typography/BodyLarge";
import BodySuper from "@/app/_components/typography/BodySuper";
import HeadlineSmall from "@/app/_components/typography/HeadlineSmall";
import PageContainerGeneral from "@/app/_layout/PageContainerGeneral";
import XlContainer from "@/app/_layout/containers/XlContainer";
import { Box, Image } from "@chakra-ui/react";


export default async function GradingStandards({ params }) {

  const data = await getPage(params);
  const grades = await getGrades();

  console.log('GradingStandards')
  console.log(data)

  return (
 
    <PageContainerGeneral data={data}>
      
      <Box pt='8'>
        <XlContainer>
          {/* <Box pt='16' maxW='4xl'>
            <BodyLarge color='primary.40'>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc 
              vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti 
              sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</BodyLarge>
          </Box> */}
        </XlContainer>
      </Box>

      {
        data.attributes.slug == 'grading-standards' ?
        <GradeAccordion data={data} gradeData={grades} />
        : null
      }

    </PageContainerGeneral>

  );
}

async function getPage(params) {
  try {
    const slug = params.slug;
    const response =
      await fetch(process.env.BASE_URL + `/api/general-pages/2?[populate]=*`);

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

async function getGrades() {
  try {
    // const slug = params.slug;
    const response =
      await fetch(process.env.BASE_URL + `/api/grades?[populate]=*`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const grades = await response.json();

    console.log('grades')
    console.log(grades)


    return grades?.data;
  } catch (error) {
    console.error("Error fetching grade data:", error);
    throw new Error("Failed to fetch grade data");
  }
}