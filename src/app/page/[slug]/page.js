import BodyLarge from "@/app/_components/typography/BodyLarge";
import PageContainer from "@/app/_layout/PageContainer";
import PageContainerGeneral from "@/app/_layout/PageContainerGeneral";
import { Box, Image } from "@chakra-ui/react";




export default async function Page({ params }) {
  const pageBySlug = await getPageBySlug(params);
  const data = pageBySlug?.[0];

  return (
 
    <PageContainerGeneral data={data}>

        <Box position='relative' bottom='40'>
          <BodyLarge>askldfhj</BodyLarge>
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
      await fetch(process.env.BASE_URL + `/api/general-pages?populate[Sections][populate]=*&populate[HeroImage][populate]=*
      &populate[Sections][on][section.card-list][populate][Cards][populate]=*`);

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