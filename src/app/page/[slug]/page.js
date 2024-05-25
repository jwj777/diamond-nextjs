import PricingCards from "@/app/_components/sections/PricingCards";
import GradeAccordion from "@/app/_components/sections/grading-standards/GradeAccordion";
import MemberPlans from "@/app/_components/sections/member-plans/MemberPlans";
import Sections from "@/app/_components/sections/sections-array/Sections";
import PageContainerGeneral from "@/app/_layout/PageContainerGeneral";
import XlContainer from "@/app/_layout/containers/XlContainer";
import { Box, Image } from "@chakra-ui/react";


export default async function Page({ params }) {

  const pageBySlug = await getPageBySlug(params);
  const data = pageBySlug?.[0];

  const plansData = await getPlans(params);

  return (
 
    <PageContainerGeneral data={data}>

      {
        data.attributes.slug == 'grading-standards' ?
        <GradeAccordion data={data} />
        : null
      }

      <Box bg='neutral.4' pt='0'>
          <XlContainer>
            {
              data.attributes.slug == 'pricing' ?
                <MemberPlans plans={plansData} />
              : null
            }
        </XlContainer>
      </Box>

      <Box position='relative'>
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