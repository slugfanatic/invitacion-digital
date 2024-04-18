import { useEffect } from "react";
import { useCelebrationContext } from "../../Context/CelebrationContext";
import { bodaData } from "../../Utils/celebrationData";
import {
  CptContainer,
  CptPadding,
  CptTranslucentLayer,
  CptVerticalTimeline,
  CptWrapper,
} from "../../Components/Reusable";
import {
  PPCelebrantsLongMessage,
  PPCelebrantsPresentation,
  PPSaveTheDate,
} from "../../Components/PageParts";
import { LblCelebrantsInvitationMessage } from "../../Components/Labels";

const Wedding: React.FC = () => {
  const { updateCelebration } = useCelebrationContext();
  useEffect(() => {
    updateCelebration(bodaData);
  }, []);

  return (
    <CptWrapper>
      <CptContainer type="full" background="pictureH">
        <CptTranslucentLayer color="secondary" glass="lower">
          <PPCelebrantsPresentation distribution="right" />
        </CptTranslucentLayer>
      </CptContainer>
      <CptContainer type="margin" background="alternative">
        <CptPadding>
          <LblCelebrantsInvitationMessage />
        </CptPadding>
      </CptContainer>
      <CptContainer type="margin" background="pictureH">
        <CptTranslucentLayer color="secondary" glass="high">
          <PPSaveTheDate distribution="left" />
        </CptTranslucentLayer>
      </CptContainer>
      <CptContainer type="card" background="alternative">
        <PPCelebrantsLongMessage />
      </CptContainer>
      <CptContainer type="card">
        <CptVerticalTimeline />
      </CptContainer>
    </CptWrapper>
  );
};

export default Wedding;
