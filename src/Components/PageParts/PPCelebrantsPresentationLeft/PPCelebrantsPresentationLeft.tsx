import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { CptPadding, CptSpacer } from "../../Reusable";
import { LblCelebrants, LblCelebrationName } from "../../Labels";

const PPCelebrantsPresentationLeft: React.FC = () => {
  return (
    <CptPadding>
      <CptSpacer vSize="medium" />
      <Grid2 container columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid2 xs={4} sm={4} md={6}>
          <LblCelebrants />
        </Grid2>
        <Grid2 xs sm md></Grid2>
      </Grid2>
      <CptSpacer vSize="xsmall" />
      <Grid2 container columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid2 xs={4} sm={4} md={6}>
          <LblCelebrationName />
        </Grid2>
        <Grid2 xs sm md></Grid2>
      </Grid2>
      <CptSpacer vSize="small" />
    </CptPadding>
  );
};

export default PPCelebrantsPresentationLeft;
