import { useEffect } from "react";
import { useCelebrationContext } from "../../Context/CelebrationContext";
import { bodaData } from "../../Utils/celebrationData";
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
