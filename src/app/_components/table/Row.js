import { Box } from "@chakra-ui/react";
import BodyMedium from "../typography/BodyMedium";

export default function Row({ children }) {

  return(

    <Box display='flex' alignItems='center' justifyContent={'space-between'} borderBottom='1px' borderColor='neutral.30' pb='3' mb='3'>
      { children }
    </Box>

  )
}