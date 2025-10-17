import { useEffect } from "react";
import { useCelebrationContext } from "../../Context/CelebrationContext";
import { quinceAniosData } from "../../Utils/celebrationData";
import {
  CptBackgroundMusic,
  CptContainer,
  CptGallery,
  CptLoader,
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

const FifteenYears: React.FC = () => {
  const { updateCelebration } = useCelebrationContext();

  useEffect(() => {
    updateCelebration(quinceAniosData);
  });

  return (
    <>
      <CptLoader />
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
        <CptContainer type="card" background="pictureH2">
          <CptTranslucentLayer color="secondary">
            <PPSaveTheDate distribution="right" />
          </CptTranslucentLayer>
        </CptContainer>
        <CptContainer type="margin" background="pictureB">
          <CptTranslucentLayer color="primary" glass="medium">
            <PPCelebrantsLongMessage />
          </CptTranslucentLayer>
        </CptContainer>
        <CptContainer type="margin" background="color">
          <CptGallery />
        </CptContainer>
        <CptContainer type="card" background="pictureB">
          <CptVerticalTimeline />
        </CptContainer>
        <CptBackgroundMusic />
      </CptWrapper>
    </>
  );
};

export default FifteenYears;
