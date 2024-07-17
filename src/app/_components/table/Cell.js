import { Box } from "@chakra-ui/react";
import BodyMedium from "../typography/BodyMedium";

export default function Cell({ col, children, width }) {

  return(

    <Box textAlign={ col == 1 ? 'left' : 'center'} width={width ? width : '120px'}>
      <BodyMedium color='neutral.80'>
        {children}
      </BodyMedium>
    </Box>

  )
}