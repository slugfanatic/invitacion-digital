import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { CptPadding, CptSpacer } from "../../Reusable";
import { LblCelebrants, LblCelebrationName } from "../../Labels";

const PPCelebrantsPresentation: React.FC = () => {
  return (
    <CptPadding>
      <Grid2 container columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid2 xs sm md></Grid2>
        <Grid2 xs={4} sm={4} md={6}>
          <CptSpacer vSize="medium" />
        </Grid2>
      </Grid2>
      <Grid2 container columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid2 xs sm md></Grid2>
        <Grid2 xs={4} sm={4} md={6}>
          <LblCelebrants />
        </Grid2>
      </Grid2>
      <Grid2 container columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid2 xs sm md></Grid2>
        <Grid2 xs={4} sm={4} md={6}>
          <LblCelebrationName />
        </Grid2>
      </Grid2>
      <Grid2 container columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid2 xs sm md></Grid2>
        <Grid2 xs={4} sm={4} md={6}>
        <CptSpacer vSize="medium" />
        </Grid2>
      </Grid2>
    </CptPadding>
  );
};

export default PPCelebrantsPresentation;
