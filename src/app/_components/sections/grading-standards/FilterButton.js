import { Box, Button } from "@chakra-ui/react";


export default function FilterButton({ label, updateFilter, onClick }) {

  return(

    <Box>
      <Button 
        variant='neutralLight' 
        mr='4' 
        mb='4'
        onClick={() => updateFilter(label)}
      >
        {label}
      </Button>
    </Box>

  )

}