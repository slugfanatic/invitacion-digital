import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { CptPadding, CptSpacer } from "../../Reusable";
import { LblCelebrants, LblCelebrationName } from "../../Labels";

const PPCelebrantsPresentationMiddle: React.FC = () => {
  return (
    <CptPadding>
      <CptSpacer vSize="xsmall" />
      <Grid2 container columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid2 xs={4} sm={4} md={12}>
          <LblCelebrants />
        </Grid2>
      </Grid2>
      <CptSpacer vSize="medium" />
      <Grid2 container columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid2 xs={4} sm={8} md={12}>
          <LblCelebrationName />
        </Grid2>
      </Grid2>
      <CptSpacer vSize="xsmall" />
    </CptPadding>
  );
};

export default PPCelebrantsPresentationMiddle;
