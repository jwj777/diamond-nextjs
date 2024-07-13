import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Text, Flex, Link } from "@chakra-ui/react";
import TitleSmall from '../typography/TitleSmall';
import HeadlineSmall from '../typography/HeadlineSmall';
import BodyMedium from '../typography/BodyMedium';
import BodySuper from '../typography/BodySuper';

function PriceGrids({ priceGridStandard, priceGridBulk }) {

  const renderTable = (data, title) => {
    if (!data) {
      return <Text>No data available</Text>;
    }

    const tiers = Object.keys(data);
    const declaredValues = Object.keys(data[tiers[0]]);

    return (
     <Box mb={8} bg='neutral.10' p='10' borderRadius='1.5rem'>
      <BodySuper color='neutral.95'>{title}</BodySuper>

      <Flex direction="column" mt='8'>

        <Flex borderBottom='1px' borderColor='neutral.30' pb='2'>
          <Box flex="1" p={2} fontWeight="bold" >
            <TitleSmall color='primary.90'>Declared Value</TitleSmall>
          </Box>
          {tiers.map((tier) => (
            <Box key={tier} flex="1" p={2} textAlign={'center'}>
              <BodyMedium color='primary.90'>{tier}</BodyMedium>
            </Box>
          ))}
        </Flex>

        {declaredValues.map((value) => (
          <Flex key={value} borderBottom="1px" borderColor='neutral.30' py='1'>
            <Box flex="1" p={2}>
            <BodyMedium color='neutral.98'>{'$' + value}</BodyMedium>
            </Box>
            {tiers.map((tier) => (
              <Box key={tier} flex="1" p={2} textAlign={'center'}>
                <BodyMedium color='neutral.80'>{'$' + data[tier][value]}</BodyMedium>
              </Box>
            ))}
          </Flex>
        ))}

      </Flex>
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
      {renderTable(priceGridStandard, "Single Card Pricing (1-9 Cards)")}
      {renderTable(priceGridBulk, "Bulk Pricing (10 or More Cards)")}
    </Box>
  );
}

export default PriceGrids;
