import React from 'react';
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import TitleSmall from '../typography/TitleSmall';
import BodyMedium from '../typography/BodyMedium';
import BodySuper from '../typography/BodySuper';

const cellWidth ='140px';

function PriceGrids({ priceGridStandard, priceGridBulk }) {

  const renderTable = (data, title, link_label, link_url) => {
    if (!data) {
      return <Text>No data available</Text>;
    }

    const tiers = Object.keys(data);
    const declaredValues = Object.keys(data[tiers[0]]);

    return (
      <Box mb={8} bg='neutral.10' p='10' borderRadius='1.5rem'>
        <BodySuper color='neutral.95'>{title}</BodySuper>
        <Box mt='6' mb='12'>
          <Link href={link_url} variant='neutralDarkText' size='mdText' target='blank'>{link_label}</Link>
        </Box>

        <Box 
          overflowX={{ 
            base: 'auto',
            lg: 'visible'
          }}
        >
          <Flex direction="column" mt='8'>
            <Flex borderBottom='1px' borderColor='neutral.30' pb='2' minWidth="fit-content">
              <Box flex="1" p={2} fontWeight="bold" minWidth={cellWidth}>
                <TitleSmall color='primary.90'>Declared Value</TitleSmall>
              </Box>
              {tiers.map((tier) => (
                <Box key={tier} flex="1" p={2} textAlign={'center'} minWidth={cellWidth}>
                  <BodyMedium color='primary.90'>{tier}</BodyMedium>
                </Box>
              ))}
            </Flex>

            {declaredValues.map((value) => (
              <Flex key={value} borderBottom="1px" borderColor='neutral.30' py='1' minWidth="fit-content">
                <Box flex="1" p={2} minWidth={cellWidth}>
                  <BodyMedium color='neutral.98'>{'$' + value}</BodyMedium>
                </Box>
                {tiers.map((tier) => (
                  <Box key={tier} flex="1" p={2} textAlign={'center'} minWidth={cellWidth}>
                    <BodyMedium color='neutral.80'>{'$' + data[tier][value]}</BodyMedium>
                  </Box>
                ))}
              </Flex>
            ))}
          </Flex>
        </Box>

        <Box borderBottom='1px' borderColor='neutral.30' pb='3' pt='3'>
          <BodyMedium color='neutral.80'>
            For orders over $50,000 <Link href="/page/contact" variant='primaryDarkText' size='mdText'>contact us</Link>.
          </BodyMedium>
        </Box>

      </Box>
    );
  };

  return (
    <Box>
      {renderTable(priceGridStandard, "Single Card Pricing (1-9 Cards)", 'See our full "Pro-Rated" single card pricing list', '/single-card-prices.pdf')}
      {renderTable(priceGridBulk, "Bulk Pricing (10 or More Cards)", 'See our full "Pro-Rated" bulk order pricing list', '/bulk-card-prices.pdf')}
    </Box>
  );
}

export default PriceGrids;
