import GradeAccordion from "@/app/_components/sections/grading-standards/GradeAccordion";
import Sections from "@/app/_components/sections/sections-array/Sections";
import PageContainerGeneral from "@/app/_layout/PageContainerGeneral";
import { Box, Image } from "@chakra-ui/react";


export default async function Page({ params }) {

  const pageBySlug = await getPageBySlug(params);
  const data = pageBySlug?.[0];

  return (
 
    <PageContainerGeneral data={data}>

      {
        data.attributes.slug == 'grading-standards' ?
        <GradeAccordion data={data} />
        : null
      }

        <Box position='relative' bottom='40'>
          {
            data.attributes.Sections.map((item, index) => {
              return(
                <Sections key={index} data={item} />
              )
            })
          }
        </Box>

    </PageContainerGeneral>

  );
}

async function getPageBySlug(params) {
  try {
    const slug = params.slug;
    const response =
      await fetch(process.env.BASE_URL + `/api/general-pages?filters[slug][$eq]=${slug}&populate[Sections][populate]=*&populate[HeroImage][populate]=*
      &populate[Sections][on][section.card-list][populate][Cards][populate]=
      &populate[Sections][on][section.two-column-image-text-edge][populate]=*`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const pages = await response.json();

    return pages?.data;
  } catch (error) {
    console.error("Error fetching pages data:", error);
    throw new Error("Failed to fetch data");
  }
}