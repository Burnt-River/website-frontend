import { SxProps } from "@mui/material";
import { Outlet } from "react-router-dom";

import Flex from "components/ui/Flex";
import Header from "components/Header";
import Footer from "./Footer";

interface PageLayoutProps {
  sx?: SxProps;
}

export default function PageLayout({ sx }: PageLayoutProps) {
  return (
    <Flex
      sx={{
        ...sx,
        backgroundColor: "#BFB6BB",
        width: "100%",
        height: "100%",
        position: "fixed",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header
        title="BURNT RIVER"
        subtitle="ONTARIO"
        items={[
          {
            text: "About Us",
            to: "/about",
          },
          {
            text: "Gallery",
            to: "/gallery",
          },
          {
            text: "Get Involved",
            to: "/get-involved",
          },
          {
            text: "Community Centre",
            to: "/community-centre",
          },
        ]}
      />
      <Flex
        sx={{
          pt: "4.2rem",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          overflow: "auto",
        }}
      >
        <Outlet />
      </Flex>
      <Footer
        items={[
          {
            text: "Facebook",
            to: "https://www.facebook.com/BurntRiverOntario/",
          },
        ]}
      />
    </Flex>
  );
}
