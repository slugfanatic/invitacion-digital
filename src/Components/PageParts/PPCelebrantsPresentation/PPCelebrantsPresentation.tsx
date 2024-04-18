import {
  CptGridContainer,
  CptGridLeft,
  CptGridMiddle,
  CptGridRight,
  CptPadding,
  CptSpacer,
} from "../../Reusable";
import { LblCelebrants, LblCelebrationName } from "../../Labels";
import IPPCelebrantsPresentation from "../../../Interfaces/Components/IPPCelebrantsPresentation";

const LeftContent: React.FC = () => (
  <>
    <CptSpacer vSize="medium" />
    <CptGridContainer>
      <CptGridLeft>
        <LblCelebrants />
      </CptGridLeft>
    </CptGridContainer>
    <CptSpacer vSize="xsmall" />
    <CptGridContainer>
      <CptGridLeft>
        <LblCelebrationName />
      </CptGridLeft>
    </CptGridContainer>
    <CptSpacer vSize="small" />
  </>
);

const MiddleContent: React.FC = () => (
  <>
    <CptSpacer vSize="xsmall" />
    <CptGridContainer>
      <CptGridMiddle>
        <LblCelebrants />
      </CptGridMiddle>
    </CptGridContainer>
    <CptSpacer vSize="medium" />
    <CptGridContainer>
      <CptGridMiddle>
        <LblCelebrationName />
      </CptGridMiddle>
    </CptGridContainer>
    <CptSpacer vSize="xsmall" />
  </>
);

const RightContent: React.FC = () => (
  <>
    <CptSpacer vSize="medium" />
    <CptGridContainer>
      <CptGridRight>
        <LblCelebrants />
      </CptGridRight>
    </CptGridContainer>
    <CptSpacer vSize="xsmall" />
    <CptGridContainer>
      <CptGridRight>
        <LblCelebrationName />
      </CptGridRight>
    </CptGridContainer>
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
