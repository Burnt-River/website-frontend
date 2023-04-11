import { SxProps } from "@mui/material";
import { Outlet } from "react-router-dom";
import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";

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
        mt: "200px",
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
          // {
          //   text: "Gallery",
          //   to: "/gallery",
          // },
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
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          overflow: "auto",
          height: "100%",
        }}
      >
        <Outlet />
      </Flex>
      <Footer
        items={[
          {
            content: (
              <IconButton color="success">
                <FacebookIcon />
              </IconButton>
            ),
            to: "https://www.facebook.com/BurntRiverOntario/",
          },
        ]}
      />
    </Flex>
  );
}
