'use client'
import { Box, Spinner } from "@chakra-ui/react";
import HeroHeaderGeneral from "./hero-header/HeroHeaderGeneral";
import Footer from "./footer/Footer";
import TopBanner from "../_components/promotions/TopBanner";
import { useEffect, useState } from "react";


export default function PageContainerGeneral({ data, children }) {

  const [promotions, setPromotions] = useState([]);
  const [activePromotion, setActivePromotion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPromotions() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/promotions?populate[Cards][populate]=*`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch promotions");
        }
        const data = await response.json();
        setPromotions(data?.data);

        // Find active promotion
        const active = data?.data?.find(
          (promotion) => (promotion.attributes.Promotion_Status === "Active" && promotion.attributes.Display_Top_Banner === "On")
        );
        setActivePromotion(active || null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPromotions();
  }, []);

  if (loading) {
    return (
    <Box bg='neutral.10' display='flex' alignItems='center' justifyContent='center' height='100vh' width='100%'>
      <Spinner color='primary.90' size='xl' />
    </Box>
    )
  }

  if (error) {
    return <p>Error: {error}</p>; // Display an error message if needed
  }

  return (

    <Box>
      {
        (activePromotion && data.attributes.slug !='pricing') ?
        <TopBanner promotions={activePromotion} />
        : null
      }
      <HeroHeaderGeneral data={data} />
      
      <Box bg='neutral.100'>
        {children}
      </Box>

      <Footer />

    </Box>

  )

}