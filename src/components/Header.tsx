import { Link, SxProps } from "@mui/material";
import React, { ReactElement } from "react";
import Flex from "./ui/Flex";

interface HeaderLinkItem {
  text: string;
  to: string;
  isSelected: boolean;
}

interface HeaderProps {
  items: HeaderLinkItem[];
  title: string;
  subtitle: string;
  sx?: SxProps;
}

export default function Header({
  items,
  title,
  subtitle,
  sx,
}: HeaderProps): ReactElement {
  return (
    <Flex
      sx={{
        ...sx,
        width: "100%",
        height: "330px",
        color: "white",
        backgroundColor: "#36393B",
      }}
    >
      <Flex
        sx={{
          p: "92px",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Flex sx={{ fontSize: "48px" }}>{title}</Flex>
          <Flex sx={{ fontSize: "24px" }}>{subtitle}</Flex>
        </Flex>
        <Flex sx={{ gap: "24px" }}>
          {items.map((item) => (
            <Link
              href={item.to}
              sx={{
                textDecoration: "none",
                color: "white",
                fontSize: "24px",
                borderBottom: item.isSelected ? "1px solid white" : "none",
                pb: item.isSelected ? "8px" : "none",
              }}
            >
              {item.text}
            </Link>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
