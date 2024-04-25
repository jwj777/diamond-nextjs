import styles from "./page.module.css";
import { Box, Image } from "@chakra-ui/react";
import PageContainerHome from "./_layout/PageContainerHome";
import XlContainer from "./_layout/containers/XlContainer";
import HeadlineLargeAlt from "./_components/typography/HeadlineLargeAlt";
import Sections from "./_components/sections/sections-array/Sections";
import BodySuper from "./_components/typography/BodySuper";
import BodyLarge from "./_components/typography/BodyLarge";
import HeadlineLarge from "./_components/typography/HeadlineLarge";

export default async function Home() {

  let data = await getData()
  data = data.data

  console.log('Home')
  console.log(data)
  
  return (
    <main className={styles.main}>
      <PageContainerHome data={data}>

        <Box position='relative' bottom='40'>
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
  &populate[Sections][on][section.card-list][populate][Cards][populate]=*`, { 
    next: { revalidate: 30 }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
