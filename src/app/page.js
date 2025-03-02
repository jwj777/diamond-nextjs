import styles from "./page.module.css";
import { Box, Image } from "@chakra-ui/react";
import PageContainerHome from "./_layout/PageContainerHome";
import Sections from "./_components/sections/sections-array/Sections";


export const metadata = {
  title: 'DiamondGrade Cards - A Professional Card Grading Company',
  description: '...',
}

export default async function Home() {

  let data = await getData()
  data = data.data
  let promotions = await getPromotions()
  
  return (
    <main className={styles.main}>
      <PageContainerHome 
        data={data} 
        promotions={promotions}
        cardList={
          data.attributes.Sections.filter(obj => {
            return obj.__component == 'section.card-list'
          })
        }
      >

        <Box position='relative' bottom={{ base: '0', xl: '0' }} mb={{ base: '0', xl: '0' }}>
          {
            data.attributes.Sections.map((item, index) => {
              return(
                <Sections key={index} data={item} />
              )
            })
          }
        </Box>

      </PageContainerHome>
    </main>
  );
}


async function getData() {
  const res = await fetch(process.env.BASE_URL + `/api/homepages/1?populate[Sections][populate]=*&populate[HeroImage][populate]=*
  &populate[Sections][on][section.card-list][populate][Cards][populate]=*
  &populate[Sections][on][section.section-basic-cards-2][populate][Cards][populate]=*
  &populate[Sections][on][section.image-and-text-cards][populate]=*`, { 
    next: { revalidate: 30 }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
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
