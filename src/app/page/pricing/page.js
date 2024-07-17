import PricingCards from "@/app/_components/sections/PricingCards";
import PageContainerGeneral from "@/app/_layout/PageContainerGeneral";
import XlContainer from "@/app/_layout/containers/XlContainer";
import { Box, Image } from "@chakra-ui/react";
import { priceGridStandard, priceGridBulk } from "@/app/data/priceGrids";
import PriceGrids from "@/app/_components/sections/PriceGrids";


export default async function Page({ params }) {


  console.log("Page component is mounting"); 

  // Log the imported data to verify
  console.log("priceGridStandard:", priceGridStandard);
  console.log("priceGridBulk:", priceGridBulk);

  const pageBySlug = await getPageBySlug(params);
  const data = pageBySlug?.[0];


  // const plansData = await getPlans(params);


  return (
 
    <PageContainerGeneral data={data}>


      <Box bg='neutral.4' pt='0'>
          {/* <XlContainer> */}

            <PricingCards />


            <Box mb='24'>
              <PriceGrids priceGridStandard={priceGridStandard} priceGridBulk={priceGridBulk} />
            </Box>

        {/* </XlContainer> */}
      </Box>



    </PageContainerGeneral>

  );
}

async function getPageBySlug(params) {
  console.log("Fetching page by slug:", params.slug);
  try {
    const slug = params.slug;
    const response =
      await fetch(process.env.BASE_URL + `/api/general-pages?filters[slug][$eq]=pricing&populate[Sections][populate]=*&populate[HeroImage][populate]=*
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

    return plans?.data;
  } catch (error) {
    console.error("Error fetching grade data:", error);
    throw new Error("Failed to fetch grade data");
  }
}
