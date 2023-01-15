import React, { ReactNode } from "react";
import Box from "@mui/material/Box";

interface FlexProps {
  children: ReactNode;
}

export default function Flex({ children }: FlexProps) {
  return <Box sx={{ display: "flex" }}>{children}</Box>;
}
