import React from 'react';
import {
  Box,
  Select,
} from "@chakra-ui/react";
import InputFloatLight from "./inputFloatLight";
import InputFloatWithPrefix from "./InputFloatPrefix";

const CardFormFields = ({ name, setName, brandSet, setBrandSet, year, setYear, number, setNumber, desc, setDesc, value, setValue, slabStyle, setSlabStyle }) => {
  return (
    <>
      <Box mr="4" minW="160px">
        <InputFloatLight
          label="Player Name / Character"
          id={"playername"}
          name="playername"
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required={true}
        />
      </Box>
      <Box mr="4" minW="160px">
        <InputFloatLight
          label="Brand / Set"
          id={"brandSet"}
          name="brandSet"
          type={"text"}
          value={brandSet}
          onChange={(e) => setBrandSet(e.target.value)}
          required={true}
        />
      </Box>
      <Box display="flex" flex="wrap" alignItems="center" flexDirection={{ base: "column", md: "row" }} required={true}>
        <Box mr="4" minW="160px">
          <InputFloatLight
            label="Card Year"
            id={"cardyear"}
            type={"text"}
            value={year || ""}
            onChange={(e) => setYear(e.target.value)}
            required={true}
          />
        </Box>
        <Box mr="4" minW="160px">
          <InputFloatLight
            label="Card #"
            id={"cardnumber"}
            type={"text"}
            value={number || ""}
            onChange={(e) => setNumber(e.target.value)}
            required={true}
          />
        </Box>
      </Box>
      <Box mr="4" minW="160px">
        <InputFloatLight
          label="Description/Parallel/Variation"
          id={"description"}
          type={"text"}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required={true}
        />
      </Box>
      <Box mr="4" minW="160px">
        <InputFloatWithPrefix
          label="Declared Value"
          id={"declaredValue"}
          type={"text"}
          value={value || ""}
          onChange={(e) => setValue(e.target.value)}
          required={true}
        />
      </Box>
      <Box mb="4" mr="4" minW="180px" h="16">
        <Select
          placeholder="-- Slab Style --"
          bg="neutral.90"
          borderColor="neutral.80"
          fontSize="1.2rem"
          fontWeight="500"
          h="16"
          borderRadius="8"
          value={slabStyle}
          onChange={(e) => setSlabStyle(e.target.value)}
        >
          <option value="Clear Acrylic">Clear Acrylic</option>
          <option value="Black Acrylic">Black Acrylic</option>
        </Select>
      </Box>
    </>
  );
};

export default CardFormFields;
