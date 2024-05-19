"use client";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./_theme";

export function Providers({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
