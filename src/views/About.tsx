import { Box } from "@mui/material";
import InfoCard from "components/ui/InfoCard";
import { ReactElement } from "react";
import ChristmasTree from "images/christmas-tree.jpg";
import Flex from "components/ui/Flex";

export default function About(): ReactElement {
  return (
    <Flex>
      <InfoCard
        sx={{ maxWidth: "80rem", height: "100%", alignItems: "center" }}
      >
        <Box
          component="img"
          src={ChristmasTree}
          sx={{ height: "450px", borderRadius: "30px" }}
        />
        <Flex
          sx={{
            p: "4.8rem",
            justifyContent: "center",
          }}
        >
          Welcome to our little town’s website. We hope you’ll stay a while.
          Burnt River is a hamlet located in the middle of the former Township
          of Somerville, in the City of Kawartha Lakes, Ontario, Canada. The
          community is on the Burnt River.
        </Flex>
      </InfoCard>
    </Flex>
  );
}
