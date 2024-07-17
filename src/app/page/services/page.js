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


export default async function Services({ params }) {

  const pageBySlug = await getPageBySlug(params);
  const data = pageBySlug?.[0];

  return (
 
    <PageContainerGeneral data={data}>


      <Box bg='neutral.4' pt='0' pb='24' mt='-8'>
        <XlContainer>

          <Box>

            <Box bg='neutral.15' p='8' borderRadius='1.25rem' mb='8'>
              <Box mb='8'>
                <Box mb='-6px'><TitleLarge color='neutral.100'>Collectible Types</TitleLarge></Box>
              </Box>

              <Box>
                <Box display='flex' alignItems='center' justifyContent={'space-between'} borderBottom='1px' borderColor='neutral.30' pb='2' mb='2'>
                  <Box width='120px'><TitleSmall color='neutral.90'>Type</TitleSmall></Box>
                  <Box textAlign={'center'} width='640px'><TitleSmall color='neutral.90'>Detail</TitleSmall></Box>
                  <Box textAlign={'center'} width='140px'><TitleSmall color='neutral.90'>Grading Services</TitleSmall></Box>
                </Box>
                <Box display='flex' alignItems='center' justifyContent={'space-between'} borderBottom='1px' borderColor='neutral.30' pb='2' mb='2'>
                  <Cell col='1'>{'TCG (GAMING)'}</Cell>
                  <Cell width='640px'>ALL GAMING BRANDS - MAGIC THE GATHERING, POKEMON, YU GI OH ETC.</Cell>
                  <Cell>No</Cell>
                </Box>
                <Box display='flex' alignItems='center' justifyContent={'space-between'} borderBottom='1px' borderColor='neutral.30' pb='2' mb='2'>
                  <Cell col='1'>NON-SPORTS CARDS</Cell>
                  <Cell width='640px'>NOT SPORTS RELATED - STAR WARS, MARVEL, MOVIE THEMED, TV SERIES CARDS, TOY RELATED THEMES, ACTORS, PRESIDENTS, HISTORIC EVENT CARDS ETC.</Cell>
                  <Cell>Yes</Cell>
                </Box>
                <Box display='flex' alignItems='center' justifyContent={'space-between'} borderBottom='1px' borderColor='neutral.30' pb='2' mb='2'>
                  <Cell col='1'>SPORTS CARDS</Cell>
                  <Cell width='100%'>ALL SPORTS RELATED ITEMS - i.e. BASEBALL, FOOTBALL, BASKETBALL, GOLF, SOCCER , OLYMPICS ETC.</Cell>
                  <Cell>Yes</Cell>
                </Box>
                <Box display='flex' alignItems='center' justifyContent={'space-between'} borderBottom='1px' borderColor='neutral.30' pb='2' mb='2'>
                  <Cell col='1'>CERTIFIED AUTOGRAPHS</Cell>
                  <Cell width='100%'>ANY AUTOGRAPHS DESIGNED WITH THE LICENSED SET AND OR CERTIFIED BY THE MANUFACTURER</Cell>
                  <Cell>Yes</Cell>
                </Box>
                <Box display='flex' alignItems='center' justifyContent={'space-between'} borderBottom='1px' borderColor='neutral.30' pb='2' mb='2'>
                  <Cell col='1'>Raw Autographs</Cell>
                  <Cell width='100%'>PERSONAL OR INDEPENDENTLY OBTAINED AUTOGRAPHS</Cell>
                  <Cell>No</Cell>
                </Box>
              </Box>
            </Box>


            <Box bg='neutral.15' p='8' borderRadius='1.25rem' mb='8'>
              <Box mb='8'>
                <Box mb='-6px'><TitleLarge color='neutral.100'>Thickness</TitleLarge></Box>
              </Box>

              <Box>
                <Box display='flex' alignItems='center' justifyContent={'space-between'} borderBottom='1px' borderColor='neutral.30' pb='2' mb='2'>
                  <Box width='120px'><TitleSmall color='neutral.90'>Thickness</TitleSmall></Box>
                  <Box textAlign={'center'} width='640px'><TitleSmall color='neutral.90'>Detail</TitleSmall></Box>
                  <Box textAlign={'center'} width='140px'><TitleSmall color='neutral.90'>Grading Services</TitleSmall></Box>
                </Box>
                <Box display='flex' alignItems='center' justifyContent={'space-between'} borderBottom='1px' borderColor='neutral.30' pb='2' mb='2'>
                  <Cell col='1'>UP TO 40PT</Cell>
                  <Cell width='640px'>UP TO 1MM THICK</Cell>
                  <Cell>Yes</Cell>
                </Box>
              </Box>
            </Box>


            <Box bg='neutral.15' p='8' borderRadius='1.25rem' mb='8'>
              <Box mb='8'>
                <Box mb='-6px'><TitleLarge color='neutral.100'>Sizes</TitleLarge></Box>
              </Box>

              <Box>
                <Box display='flex' alignItems='center' justifyContent={'space-between'} borderBottom='1px' borderColor='neutral.30' pb='2' mb='2'>
                  <Box width='120px'><TitleSmall color='neutral.90'>Size</TitleSmall></Box>
                  <Box textAlign={'center'}><TitleSmall color='neutral.90'>Detail</TitleSmall></Box>
                  <Box textAlign={'center'} width='140px'><TitleSmall color='neutral.90'>Grading Services</TitleSmall></Box>
                </Box>
                <Box display='flex' alignItems='center' justifyContent={'space-between'} borderBottom='1px' borderColor='neutral.30' pb='2' mb='2'>
                  <Cell col='1'>2 1/2" X 3 1/2"</Cell>
                  <Cell width='640px'>STANDARD SIZE</Cell>
                  <Cell>Yes</Cell>
                </Box>
                <Box display='flex' alignItems='center' justifyContent={'space-between'} borderBottom='1px' borderColor='neutral.30' pb='2' mb='2'>
                  <Cell col='1'>2 5/8" X 3 3/4"</Cell>
                  <Cell width='640px'>SIZE EQUAL TO VINTAGE TOPPS 1952-1956 & 1988 TOPPS BIG</Cell>
                  <Cell>Yes</Cell>
                </Box>
                <Box display='flex' alignItems='center' justifyContent={'space-between'} borderBottom='1px' borderColor='neutral.30' pb='2' mb='2'>
                  <Cell col='1'>2" X 2 1/2"</Cell>
                  <Cell width='100%'>SIZE EQUAL TO 1948-1950 BOWMAN</Cell>
                  <Cell>Yes</Cell>
                </Box>
                <Box display='flex' alignItems='center' justifyContent={'space-between'} borderBottom='1px' borderColor='neutral.30' pb='2' mb='2'>
                  <Cell col='1'>2 1/8" X 3 1/8"</Cell>
                  <Cell width='100%'>SIZE EQUAL TO 1951-1952 BOWMAN</Cell>
                  <Cell>Yes</Cell>
                </Box>
                <Box display='flex' alignItems='center' justifyContent={'space-between'} borderBottom='1px' borderColor='neutral.30' pb='2' mb='2'>
                  <Cell col='1'>2 1/2" X 3 3/4"</Cell>
                  <Cell width='100%'>SIZE EQUAL TO 1953-1955 & 1989 BOWMAN</Cell>
                  <Cell>Yes</Cell>
                </Box>
                <Box display='flex' alignItems='center' justifyContent={'space-between'} borderBottom='1px' borderColor='neutral.30' pb='2' mb='2'>
                  <Cell col='1'>1 7/16" X 2 5/8"</Cell>
                  <Cell width='100%'>SIZE EQUAL TO T206/ALLEN AND GINTER MINI</Cell>
                  <Cell>Yes</Cell>
                </Box>
                <Box display='flex' alignItems='center' justifyContent={'space-between'} borderBottom='1px' borderColor='neutral.30' pb='2' mb='2'>
                  <Cell col='1'>2 1/4" X 3 1/8"</Cell>
                  <Cell width='100%'>TOPPS MINI</Cell>
                  <Cell>COMING SOON</Cell>
                </Box>
                <Box display='flex' alignItems='center' justifyContent={'space-between'} borderBottom='1px' borderColor='neutral.30' pb='2' mb='2'>
                  <Cell col='1'>2 3/8" X 2 7/8"</Cell>
                  <Cell width='100%'>GOUDEY</Cell>
                  <Cell>COMING SOON</Cell>
                </Box>
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
      await fetch(process.env.BASE_URL + `/api/general-pages?filters[slug][$eq]=services&populate=*`);

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


