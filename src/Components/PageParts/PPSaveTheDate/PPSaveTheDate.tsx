import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { CptCountdown, CptPadding, CptTranslucentLayer } from "../../Reusable";
import { LblCelebrationDate, LblSaveTheDay } from "../../Labels";

const PPSaveTheDate: React.FC = () => {
  return (
    <CptTranslucentLayer color="secondary">
      <CptPadding>
        <Grid2 container columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid2 xs={4} sm={8} md={6}>
            <LblSaveTheDay />
          </Grid2>
          <Grid2 xs sm md></Grid2>
        </Grid2>
        <Grid2 container columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid2 xs={4} sm={8} md={8}>
            <CptCountdown color="alternate" shape="square" />
          </Grid2>
          <Grid2 xs sm md></Grid2>
        </Grid2>
        <Grid2 container columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid2 xs={4} sm={8} md={6}>
            <LblCelebrationDate />
          </Grid2>
          <Grid2 xs sm md></Grid2>
        </Grid2>
      </CptPadding>
    </CptTranslucentLayer>
  );
};

export default PPSaveTheDate;
