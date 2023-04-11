import { ReactElement, useState } from "react";
import { Button, Drawer, SxProps } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import Flex from "components/ui/Flex";

interface HeaderLinkItem {
  text: string;
  to: string;
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
  const location = useLocation();
  const navigate = useNavigate();
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const { pathname } = location;

  return (
    <Flex
      sx={{
        ...sx,
        width: "100%",
        height: "200px",
        top: 0,
        color: "white",
        backgroundColor: "#36393B",
        position: "fixed",
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
            width: ["100%", "100%", "auto"],
          }}
        >
          <Flex sx={{ fontSize: ["24px", "48px"], whiteSpace: "nowrap" }}>
            {title}
          </Flex>
          <Flex sx={{ fontSize: ["12px", "24px"] }}>{subtitle}</Flex>
          <Button
            sx={{
              display: ["flex", "flex", "none"],
              color: "white",
              mt: "24px",
            }}
            onClick={() => {
              setIsNavMenuOpen((isOpen) => !isOpen);
            }}
          >
            MENU
          </Button>
        </Flex>

        {/* Desktop */}
        <Flex sx={{ gap: "24px", display: ["none", "none", "flex"] }}>
          {items.map((item) => (
            <Button
              key={item.to}
              onClick={() => {
                navigate(item.to);
              }}
              sx={{
                textDecoration: "none",
                color: "white",
                fontSize: "16px",
                whiteSpace: "nowrap",
                borderBottom: pathname === item.to ? "1px solid white" : "none",
                pb: pathname === item.to ? "8px" : "none",
              }}
            >
              {item.text}
            </Button>
          ))}
        </Flex>
        {/* Tablet and Mobile */}

        <Drawer
          sx={{ display: ["flex", "flex", "none"] }}
          anchor="top"
          open={isNavMenuOpen}
          onClose={() => setIsNavMenuOpen(false)}
        >
          {items.map((item) => (
            <Button
              key={item.to}
              onClick={() => {
                navigate(item.to);
              }}
              sx={{
                textDecoration: "none",
                color: "black",
                fontSize: "16px",
                whiteSpace: "nowrap",
                borderBottom: pathname === item.to ? "1px solid white" : "none",
                pb: pathname === item.to ? "8px" : "none",
              }}
            >
              {item.text}
            </Button>
          ))}
        </Drawer>
      </Flex>
    </Flex>
  );
}
