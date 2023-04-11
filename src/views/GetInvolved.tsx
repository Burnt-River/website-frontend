import { Box } from "@mui/material";
import InfoCard from "components/ui/InfoCard";
import { ReactElement } from "react";
import GetInvolvedPic from "images/get-involved.jpg";
import Flex from "components/ui/Flex";

export default function GetInvolved(): ReactElement {
  return (
    <Flex>
      <InfoCard
        sx={{
          maxWidth: "80rem",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          component="img"
          src={GetInvolvedPic}
          sx={{ height: ["300px", "450px"], borderRadius: "30px" }}
        />
        <Flex
          sx={{
            py: "2.4rem",
            px: "4.8rem",
            justifyContent: "center",
          }}
        >
          Make a difference in our wonderful Burnt River community, join our
          Burnt River Community Centre Volunteer Management Committee! <br />
          <br />
          We meet the first Tuesday of every month. Looking for committed
          members who want to see our Community Centre flourish! We love new
          ideas and people with a 'how to' attitude! <br />
          <br />
          For an application or to ask a question please email
          burntriverbookings@gmail.com <br />
          <br />
          Send applications to communitydevelopment@kawarthalakes.ca
          <br />
          <br /> Applicant Eligibility:
          <br />
          <br /> • A resident of the City (own, rent, live in shared
          accommodation where you do not pay rent or live in the municipality
          with no fixed address); or <br />
          <br />
          • An owner of property in the City or a person who rents property in
          the City, or the spouse of the above; and <br />
          <br />
          • At least eighteen years of age; and <br />
          <br />• A Canadian citizen or a permanent resident of Canada. We look
          forward to meeting you!
        </Flex>
      </InfoCard>
    </Flex>
  );
}
