// import styles from "./page.module.css";
import { Box, Image } from "@chakra-ui/react";
import PageContainer from "@/app/_layout/PageContainer";
import PageContainerForm from "@/app/_layout/PageContainerForm";
import SubmitCardForm from "@/app/_components/form/SubmitCardForm";
import XlContainer from "@/app/_layout/containers/XlContainer";


export default async function SubmitCard({ params }) {

  const formBySlug = await getPageBySlug(params);
  const data = formBySlug?.[0];

  console.log('SubmitCard')
  console.log(data)
  
  return (

      <PageContainerForm data={data}>
        <XlContainer>

        {
          data.attributes.slug = 'submit-card' ? <SubmitCardForm data={data} />
          : null
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