import React, { ReactElement, ReactNode } from "react";
import Flex from "./ui/Flex";
import { SxProps } from "@mui/material";

interface PageLayoutProps {
  children: ReactNode;
  sx?: SxProps;
}

export default function PageLayout({
  children,
  sx,
}: PageLayoutProps): ReactElement {
  return (
    <Flex
      sx={{
        ...sx,
        backgroundColor: "#BFB6BB",
        width: "100%",
        height: "100%",
        position: "fixed",
      }}
    >
      {children}
    </Flex>
  );
}
