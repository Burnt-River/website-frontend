import { SxProps } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import Flex from "./Flex";

interface InfoCardProps {
  sx?: SxProps;
  children: ReactNode;
}

export default function InfoCard({
  sx,
  children,
}: InfoCardProps): ReactElement {
  return (
    <Flex
      sx={{
        width: "100%",
        m: "4.8rem",
        p: "2.4rem",
        borderRadius: "30px",
        backgroundColor: "#D9D9D9",
        ...sx,
        fontSize: "22px",
      }}
    >
      {children}
    </Flex>
  );
}
