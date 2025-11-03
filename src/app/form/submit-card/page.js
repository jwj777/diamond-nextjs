// import styles from "./page.module.css";
import { Box, Link } from "@chakra-ui/react";
import PageContainerForm from "@/app/_layout/PageContainerForm";
import XlContainer from "@/app/_layout/containers/XlContainer";
import CardForm from "@/app/_components/form/CardForm";
import BodyMedium from "@/app/_components/typography/BodyMedium";
import TitleLarge from "@/app/_components/typography/TitleLarge";


export default async function SubmitCard({ params }) {

  const formBySlug = await getPageBySlug(params);
  const data = formBySlug?.[0];

  const promotions = await getPromotions();

  console.log('SubmitCard')
  console.log(data)
  
  return (

      <PageContainerForm data={data}>
        <XlContainer>

        {
          data.attributes.slug = 'submit-card' && 
          <Box>
            <Box mt='12'>
              <BodyMedium>{`After your payment, you'll receive an email with your order receipt and your invoice. Please send this invoice in with your cards.`}</BodyMedium>
            </Box>
            <Box mt='10'>
              <Link href="/page/services" variant='primaryLight'>Types of Items We Grade</Link>
            </Box>
            <Box maxW='680px' textAlign={'center'}>
              <TitleLarge>DiamondGrade Is Not Currently Accepting New Grading Requests</TitleLarge>
            </Box>
            {/* <CardForm data={data} promotions={promotions} /> */}
          </Box>
        }
        
        </XlContainer>
      </PageContainerForm>
 
  );
}


async function getPageBySlug(params) {
  try {
    const slug = params.slug;
    const response =
      await fetch(process.env.BASE_URL + `/api/forms?populate=*`);

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
      await fetch(process.env.BASE_URL + `/api/promotions?[populate]=*`);

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