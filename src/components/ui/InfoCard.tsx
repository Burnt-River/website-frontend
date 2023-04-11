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
        //  width: "100%",
        mx: [0, 0, "4.8rem"],
        my: ["2.4rem", "4.8rem"],
        p: ["1.2rem", "2.4rem"],
        borderRadius: "30px",
        backgroundColor: "#D9D9D9",
        fontSize: ["14px", "22px"],
        flexDirection: ["column", "column", "row"],
        ...sx,
      }}
    >
      {children}
    </Flex>
  );
}
