import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {
  CptContainer,
  CptPadding,
  CptSpacer,
  CptTranslucentLayer,
} from "../../Reusable";
import { LblLongMessage } from "../../Labels";
import useElementHeight from "../../../Hooks/useElementHeight";
import useBreakpoints from "../../../Hooks/useBreakpoints";

const PPCelebrantsLongMessage: React.FC = () => {
  const { elementRef, elementHeight } = useElementHeight();
  const { lgUp } = useBreakpoints();

  return (
    <Grid2 container columns={{ xs: 2, sm: 2, md: 2, lg: 4, xl: 4 }}>
      {lgUp ? (
        <>
          <Grid2 lg={2} xl={2}>
            <CptPadding innerRef={elementRef} pSize="big">
              <LblLongMessage />
            </CptPadding>
          </Grid2>
          <Grid2 lg={2} xl={2}>
            <CptContainer background="pictureV" type="full">
              <CptSpacer height={elementHeight} />
            </CptContainer>
          </Grid2>
        </>
      ) : (
        <>
          <Grid2 xs={2} sm={2} md={2}>
            <CptContainer background="pictureV" type="full">
              <CptTranslucentLayer color="primary">
                <CptPadding innerRef={elementRef} pSize="big">
                  <LblLongMessage />
                </CptPadding>
              </CptTranslucentLayer>
            </CptContainer>
          </Grid2>
        </>
      )}
    </Grid2>
  );
};

export default PPCelebrantsLongMessage;
