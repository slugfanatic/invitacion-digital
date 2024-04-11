import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { CptContainer, CptPadding, CptSpacer } from "../../Reusable";
import { LblLongMessage } from "../../Labels";
import useElementHeight from "../../../Hooks/useElementHeight";

const PPCelebrantsLongMessage: React.FC = () => {
  const { elementHeight, elementRef } = useElementHeight();

  return (
    <Grid2 container columns={{ xs: 2, sm: 2, md: 4, lg: 4, xl: 4 }}>
      <Grid2 xs={2} sm={2} md={2}>
        <CptPadding innerRef={elementRef} pSize="big">
          <LblLongMessage />
        </CptPadding>
      </Grid2>
      <Grid2 xs={2} sm={2} md={2}>
        <CptContainer background="pictureV" type="full">
          <CptSpacer height={elementHeight} />
        </CptContainer>
      </Grid2>
    </Grid2>
  );
};

export default PPCelebrantsLongMessage;
