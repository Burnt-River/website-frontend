import { Box } from "@mui/material";
import InfoCard from "components/ui/InfoCard";
import { ReactElement } from "react";
import CommunityCentrePic from "images/community-centre.png";
import Flex from "components/ui/Flex";

export default function CommunityCentre(): ReactElement {
  return (
    <Flex sx={{ flexDirection: "column" }}>
      <InfoCard
        sx={{ maxWidth: "80rem", height: "100%", alignItems: "center" }}
      >
        <Box
          component="img"
          src={CommunityCentrePic}
          sx={{ height: ["300px", "800px"], borderRadius: "30px" }}
        />
      </InfoCard>
      <InfoCard
        sx={{
          display: ["flex", "none"],
          maxWidth: "80rem",
          height: "10rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        For more information about the community centre, please email
        burntriverbookings@gmail.com
      </InfoCard>
    </Flex>
  );
}
