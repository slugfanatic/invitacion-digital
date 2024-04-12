import {
  CptContainer,
  CptPadding,
  CptTranslucentLayer,
  CptWrapper,
} from "../../Components/Reusable";
import {
  PPCelebrantsLongMessage,
  PPCelebrantsPresentation,
  PPSaveTheDate,
  PPVerticalTimeLine,
} from "../../Components/PageParts";
import { LblCelebrantsInvitationMessage } from "../../Components/Labels";

const Wedding: React.FC = () => {
  return (
    <CptWrapper>
      <CptContainer type="full" background="pictureH">
        <CptTranslucentLayer color="secondary" glass="lower">
          <PPCelebrantsPresentation />
        </CptTranslucentLayer>
      </CptContainer>
      <CptContainer type="margin" background="alternative">
        <CptPadding>
          <LblCelebrantsInvitationMessage />
        </CptPadding>
      </CptContainer>
      <CptContainer type="card" background="pictureH">
        <PPSaveTheDate />
      </CptContainer>
      <CptContainer type="card" background="alternative">
        <PPCelebrantsLongMessage />
      </CptContainer>
      <CptContainer type="card">
        <PPVerticalTimeLine />
      </CptContainer>
    </CptWrapper>
  );
};

export default Wedding;
