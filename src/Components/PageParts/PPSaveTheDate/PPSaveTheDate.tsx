import {
  CptCountdown,
  CptGridContainer,
  CptGridLeft,
  CptGridMiddle,
  CptGridRight,
  CptPadding,
} from "../../Reusable";
import { LblCelebrationDate, LblSaveTheDay } from "../../Labels";
import IPPCelebrantsPresentation from "../../../Interfaces/Components/IPPCelebrantsPresentation";

const LeftContent: React.FC = () => (
  <>
    <CptGridContainer>
      <CptGridLeft>
        <LblSaveTheDay />
      </CptGridLeft>
    </CptGridContainer>
    <CptGridContainer>
      <CptGridLeft>
        <CptCountdown color="primary" shape="square" />
      </CptGridLeft>
    </CptGridContainer>
    <CptGridContainer>
      <CptGridLeft>
        <LblCelebrationDate />
      </CptGridLeft>
    </CptGridContainer>
  </>
);

const MiddleContent: React.FC = () => (
  <>
    <CptGridContainer>
      <CptGridMiddle>
        <LblSaveTheDay />
      </CptGridMiddle>
    </CptGridContainer>
    <CptGridContainer>
      <CptGridMiddle>
        <CptCountdown color="secondary" shape="circle" />
      </CptGridMiddle>
    </CptGridContainer>
    <CptGridContainer>
      <CptGridMiddle>
        <LblCelebrationDate />
      </CptGridMiddle>
    </CptGridContainer>
  </>
);

const RightContent: React.FC = () => (
  <>
    <CptGridContainer>
      <CptGridRight>
        <LblSaveTheDay />
      </CptGridRight>
    </CptGridContainer>
    <CptGridContainer>
      <CptGridRight>
        <CptCountdown color="secondary" shape="square" />
      </CptGridRight>
    </CptGridContainer>
    <CptGridContainer>
      <CptGridRight>
        <LblCelebrationDate />
      </CptGridRight>
    </CptGridContainer>
  </>
);

const PPSaveTheDate: React.FC<IPPCelebrantsPresentation> = ({
  distribution = "middle",
}) => {
  const distributionOptions = {
    left: <LeftContent />,
    middle: <MiddleContent />,
    right: <RightContent />,
  };

  return <CptPadding>{distributionOptions[distribution]}</CptPadding>;
};

export default PPSaveTheDate;
