import { useEffect } from "react";
import { useCelebrationContext } from "../../Context/CelebrationContext";
import { tresAniosData } from "../../Utils/celebrationData";
import {
  CptContainer,
  CptGallery,
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
        <CptTranslucentLayer color="secondary">
          <PPSaveTheDate distribution="middle" />
        </CptTranslucentLayer>
      </CptContainer>
      <CptContainer type="card" background="pictureB">
        <CptTranslucentLayer color="primary" glass="medium">
          <PPCelebrantsLongMessage />
        </CptTranslucentLayer>
      </CptContainer>
      <CptContainer type="full" background="color">
        <CptGallery />
      </CptContainer>
      <CptContainer type="card" background="pictureB">
        <CptVerticalTimeline position="left" />
      </CptContainer>
    </CptWrapper>
  );
};

export default Wedding;
