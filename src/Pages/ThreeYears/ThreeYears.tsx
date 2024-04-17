import { useCelebrationContext } from "../../Context/CelebrationContext";
import { tresAniosData } from "../../Utils/celebrationData";
import {
  CptContainer,
  CptPadding,
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
  const { updateCelebration } = useCelebrationContext();
  updateCelebration(tresAniosData);

  return (
    <CptWrapper>
      <CptContainer type="full" background="pictureH">
        <PPCelebrantsPresentation />
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
