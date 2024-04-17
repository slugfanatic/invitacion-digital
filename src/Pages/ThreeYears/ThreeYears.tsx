import { useEffect } from "react";
import { useCelebrationContext } from "../../Context/CelebrationContext";
import { tresAniosData } from "../../Utils/celebrationData";
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
    updateCelebration(tresAniosData);
  }, []);

  return (
    <CptWrapper>
      <CptContainer type="full" background="pictureH">
        <CptTranslucentLayer glass="lower">
          <PPCelebrantsPresentation />
        </CptTranslucentLayer>
      </CptContainer>
      <CptContainer type="margin" background="pictureB">
        <CptTranslucentLayer color="secondary" glass="high">
          <CptPadding>
            <LblCelebrantsInvitationMessage />
          </CptPadding>
        </CptTranslucentLayer>
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
