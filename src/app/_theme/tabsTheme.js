// tabTheme.js
import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tabsAnatomy.keys);

const neutralLight = definePartsStyle((props) => {

  return {
    tab: {
      width: '100%',
      bg: 'neutral.95',
      fontSize: '1.1rem',
      borderRadius: '10rem',
      py: '20px',
      px: '32px',
      _hover: {
        bg: 'neutral.90',
      },
      _selected: {
        bg: 'neutral.90',
        borderColor: 'inherit',
        borderBottom: 'none',
      },
    },
    tablist: {
      borderColor: 'inherit',
    },
    tabpanel: {
      p: '4',
      borderBottomRadius: 'lg',
      borderTopRightRadius: 'lg',
    },
  };
});

const variants = {
  neutralLight
};

export const tabsTheme = defineMultiStyleConfig({ variants });
