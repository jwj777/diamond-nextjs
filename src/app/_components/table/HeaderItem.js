import { Box } from "@chakra-ui/react";
import TitleSmall from "../typography/TitleSmall";

export default function HeaderItem({ col, children, width, textAlign }) {

  width ? width = '290px' : width = '160px'

  console.log('HeaderItem width', width)

  return(

    <Box 
      textAlign={col == '1' ? 'left' : 'center' } 
      width={ width ? width == '290px' : width == '160px'}
      px='4'
      pl={ col == 1 ? '0' : '4' }
    >
      <Box
        width={width}
      >
        <TitleSmall color='neutral.90'>
          { children }
        </TitleSmall>
      </Box>
    </Box>

  )
}