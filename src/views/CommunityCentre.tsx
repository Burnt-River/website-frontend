import { Box } from "@mui/material";
import InfoCard from "components/ui/InfoCard";
import { ReactElement } from "react";
import CommunityCentrePic from "images/community-centre.png";
import Flex from "components/ui/Flex";

export default function CommunityCentre(): ReactElement {
  return (
    <Flex>
      <InfoCard
        sx={{ maxWidth: "80rem", height: "100%", alignItems: "center" }}
      >
        <Box
          component="img"
          src={CommunityCentrePic}
          sx={{ height: "800px", borderRadius: "30px" }}
        />
      </InfoCard>
    </Flex>
  );
}
