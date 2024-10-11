import PricingCards from "@/app/_components/sections/PricingCards";
import PageContainerGeneral from "@/app/_layout/PageContainerGeneral";
import XlContainer from "@/app/_layout/containers/XlContainer";
import { Box, Image, Link } from "@chakra-ui/react";
import { priceGridStandard, priceGridBulk } from "@/app/data/priceGrids";
import PriceGrids from "@/app/_components/sections/PriceGrids";
import HeadlineMedium from "@/app/_components/typography/HeadlineMedium";
import BodyLarge from "@/app/_components/typography/BodyLarge";
import BodyMedium from "@/app/_components/typography/BodyMedium";


export default async function Page({ params }) {

  const pageBySlug = await getPageBySlug(params);
  const data = pageBySlug?.[0];
  const promotions = await getPromotions();

  let activePromotion

  promotions.map((promotion, index) => {
    if (promotion.attributes.Promotion_Status === 'Active') {
      activePromotion = promotion 
    } else {
      activePromotion = null
    }
  })

  
  return (
 
    <PageContainerGeneral data={data} promotions={promotions}>


      <Box bg='neutral.4' pt='0'>
          <XlContainer>

            {
              activePromotion &&
              <Box 
                display='flex'
                justifyContent={{ base: 'flex-start', xl: 'space-between'}}
                flexDir={{ base: 'column', xl: 'row' }}
                alignItems={{ base: 'baseline', xl: 'center'}}
                background='neutral.15' 
                borderRadius='1.5rem'
                p='8'
                pr='16'
                mb='20'
                mt='-16'
              >
                <Box>
                  <HeadlineMedium color='neutral.100'>{activePromotion.attributes.Promotion_Headline}</HeadlineMedium>
                  <BodyLarge color='primary.90'>{activePromotion.attributes.Subheading}</BodyLarge>
                  <Box mt='3' maxW='720px'>
                    <BodyMedium color='neutral.80'>{activePromotion.attributes.Description}</BodyMedium>
                  </Box>
                </Box>
                <Box width='180px' mt={{ base: '12', xl: '0'}} mb={{ base: '8', xl: '0'}}>
                  <Link href='' variant='primaryDark' size='xl'>Sign Up Today</Link>
                </Box>
              </Box>
            }

            <PricingCards />

            <Box mb='24'>
              <PriceGrids priceGridStandard={priceGridStandard} priceGridBulk={priceGridBulk} />
            </Box>

        </XlContainer>
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


async function getPromotions() {
  try {
    // const slug = params.slug;
    const response =
      await fetch(process.env.BASE_URL + `/api/promotions?populate[Cards][populate]=*`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const promotions = await response.json();

    console.log('promotions ', promotions)

    return promotions?.data;
    
  } catch (error) {
    console.error("Error fetching grade data:", error);
    throw new Error("Failed to fetch grade data");
  }
}


