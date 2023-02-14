import { ReactElement } from "react";
import { Link, SxProps } from "@mui/material";
import Flex from "components/ui/Flex";

interface FooterLinkItem {
  text: string;
  to: string;
}

interface HeaderProps {
  items: FooterLinkItem[];

  sx?: SxProps;
}

export default function Footer({
  items,

  sx,
}: HeaderProps): ReactElement {
  return (
    <Flex
      sx={{
        position: "fixed",
        width: "100%",
        bottom: 0,
        height: "2.4rem",
        backgroundColor: "#36393B",
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        ...sx,
      }}
    >
      {items.map((item) => (
        <Link
          key={item.to}
          href={item.to}
          sx={{
            textDecoration: "none",
            color: "white",
            fontSize: "16px",
          }}
        >
          {item.text}
        </Link>
      ))}
    </Flex>
  );
}
