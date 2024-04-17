import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { CptPadding, CptSpacer } from "../../Reusable";
import { LblCelebrants, LblCelebrationName } from "../../Labels";
import IChildrenProp from "../../../Interfaces/Base/IChildrenProp";
import IPPCelebrantsPresentation from "../../../Interfaces/Components/IPPCelebrantsPresentation";

const GridContainer: React.FC<IChildrenProp> = ({ children }) => (
  <Grid2 container columns={{ xs: 4, sm: 8, md: 12 }}>
    {children}
  </Grid2>
);

const GridLeft: React.FC<IChildrenProp> = ({ children }) => (
  <>
    <Grid2 xs={4} sm={4} md={6}>
      {children}
    </Grid2>
    <Grid2 xs sm md />
  </>
);

const GridMiddle: React.FC<IChildrenProp> = ({ children }) => (
  <Grid2 xs={4} sm={8} md={12}>
    {children}
  </Grid2>
);

const GridRight: React.FC<IChildrenProp> = ({ children }) => (
  <>
    <Grid2 xs sm md />
    <Grid2 xs={4} sm={4} md={6}>
      {children}
    </Grid2>
  </>
);

const LeftContent: React.FC = () => (
  <>
    <CptSpacer vSize="medium" />
    <GridContainer>
      <GridLeft>
        <LblCelebrants />
      </GridLeft>
    </GridContainer>
    <CptSpacer vSize="xsmall" />
    <GridContainer>
      <GridLeft>
        <LblCelebrationName />
      </GridLeft>
    </GridContainer>
    <CptSpacer vSize="small" />
  </>
);

const MiddleContent: React.FC = () => (
  <>
    <CptSpacer vSize="xsmall" />
    <GridContainer>
      <GridMiddle>
        <LblCelebrants />
      </GridMiddle>
    </GridContainer>
    <CptSpacer vSize="medium" />
    <GridContainer>
      <GridMiddle>
        <LblCelebrationName />
      </GridMiddle>
    </GridContainer>
    <CptSpacer vSize="xsmall" />
  </>
);

const RightContent: React.FC = () => (
  <>
    <CptSpacer vSize="medium" />
    <GridContainer>
      <GridRight>
        <LblCelebrants />
      </GridRight>
    </GridContainer>
    <CptSpacer vSize="xsmall" />
    <GridContainer>
      <GridRight>
        <LblCelebrationName />
      </GridRight>
    </GridContainer>
    <CptSpacer vSize="small" />
  </>
);

const PPCelebrantsPresentation: React.FC<IPPCelebrantsPresentation> = ({
  distribution = "middle",
}) => {
  const distributionOptions = {
    left: <LeftContent />,
    middle: <MiddleContent />,
    right: <RightContent />,
  };

  return <CptPadding>{distributionOptions[distribution]}</CptPadding>;
};

export default PPCelebrantsPresentation;
