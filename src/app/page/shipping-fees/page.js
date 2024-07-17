import PricingCards from "@/app/_components/sections/PricingCards";
import Cell from "@/app/_components/table/Cell";
import Row from "@/app/_components/table/Row";
import BodyMedium from "@/app/_components/typography/BodyMedium";
import HeadlineLarge from "@/app/_components/typography/HeadlineLarge";
import HeadlineMedium from "@/app/_components/typography/HeadlineMedium";
import HeadlineSmall from "@/app/_components/typography/HeadlineSmall";
import TitleLarge from "@/app/_components/typography/TitleLarge";
import TitleSmall from "@/app/_components/typography/TitleSmall";
import PageContainerGeneral from "@/app/_layout/PageContainerGeneral";
import XlContainer from "@/app/_layout/containers/XlContainer";
import { Box, Image } from "@chakra-ui/react";


export default async function ShippingFees({ params }) {

  const pageBySlug = await getPageBySlug(params);
  const data = pageBySlug?.[0];

  return (
 
    <PageContainerGeneral data={data}>


      <Box bg='neutral.4' pt='0' pb='24' mt='-8'>
        <XlContainer>

          <Box>

            <Box bg='neutral.15' maxW={'800px'} p='8' borderRadius='1.25rem' mb='8'>
              <Box mb='8'>
                <Box mb='-6px'><TitleLarge color='neutral.100'>USPS Priority Mail</TitleLarge></Box>
                <BodyMedium color='neutral.80'>For orders with a declared of $500 or less.</BodyMedium>
              </Box>

              <Box  >
                <Box display='flex' alignItems='center' justifyContent={'space-between'} borderBottom='1px' borderColor='neutral.30' pb='2' mb='2'>
                  <Box><TitleSmall color='neutral.90'>Number of Items</TitleSmall></Box>
                  <Box textAlign={'center'} width='120px'><TitleSmall color='neutral.90'>Price</TitleSmall></Box>
                </Box>
                <Box display='flex' alignItems='center' justifyContent={'space-between'} borderBottom='1px' borderColor='neutral.30' pb='2' mb='2'>
                  <Cell col='1'>1 - 4</Cell>
                  <Cell>$15.00</Cell>
                </Box>
                <Box display='flex' alignItems='center' justifyContent={'space-between'} borderBottom='1px' borderColor='neutral.30' pb='2' mb='2'>
                  <Cell col='1'>5 - 25</Cell>
                  <Cell>$25.00</Cell>
                </Box>
              </Box>
            </Box>


            <Box bg='neutral.15' maxW={'960px'} p='8' borderRadius='1.25rem'>
              <Box mb='8'>
                <Box mb='-6px'><TitleLarge color='neutral.100'>Fedex</TitleLarge></Box>
                <BodyMedium color='neutral.80'>For orders with a declared greater than $500.</BodyMedium>
              </Box>

              <Box>
                <Box display='flex' alignItems='center' justifyContent={'space-between'} borderBottom='1px' borderColor='neutral.30' pb='3' mb='3'>
                  <Box><TitleSmall color='neutral.90'>Number of Items</TitleSmall></Box>
                  <Box textAlign='center'>
                    <TitleSmall color='neutral.90'>
                      Fedex One Rate
                    </TitleSmall>
                    <BodyMedium color='neutral.80'>
                      Standard 2-Day
                    </BodyMedium>
                  </Box>
                  <Box textAlign='center'>
                    <TitleSmall color='neutral.90'>
                      Fedex
                    </TitleSmall>
                    <BodyMedium color='neutral.80'>
                      Standard Overnight
                    </BodyMedium>
                  </Box>
                </Box>
                <Row>
                  <Cell col='1'>1 - 9</Cell>
                  <Cell>$20.00</Cell>
                  <Cell>$75.00</Cell>
                </Row>
                <Row>
                  <Cell col='1'>10 - 20</Cell>
                  <Cell>$25.00</Cell>
                  <Cell>$85.00</Cell>
                </Row>
                <Row>
                  <Cell col='1'>21 - 40</Cell>
                  <Cell>$30.00</Cell>
                  <Cell>$95.00</Cell>
                </Row>
                <Row>
                  <Cell col='1'>41 - 75</Cell>
                  <Cell>$40.00</Cell>
                  <Cell>$115.00</Cell>
                </Row>
              </Box>

              <Box mt='8'>
                <BodyMedium color='neutral.70' mb='3'>- Fedex 2-Day Standard - Each item over 75, add $0.75 per item</BodyMedium>
                <BodyMedium color='neutral.70' mb='3'>- Fedex Overnight - Each item over 75, add $1.50 per item</BodyMedium>
                <BodyMedium color='neutral.70' mb='3'>- For packages (Orders) valued over $50,000 contact our sales team for personalized services and shipping arrangements.</BodyMedium>
                <BodyMedium color='neutral.70' mb='3'>- FedEx prices include residential delivery.</BodyMedium>
                <BodyMedium color='neutral.70' mb='3'>- All shipping orders include signature confirmation.</BodyMedium>
              </Box>
            </Box>
          
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
      await fetch(process.env.BASE_URL + `/api/general-pages?filters[slug][$eq]=shipping-fees&populate[Sections][populate]=*&populate[HeroImage][populate]=*
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


