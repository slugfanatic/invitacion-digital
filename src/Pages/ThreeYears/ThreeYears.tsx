import { useEffect, useState } from "react";
import { useCelebrationContext } from "../../Context/CelebrationContext";
import { tresAniosData } from "../../Utils/celebrationData";
import {
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
import CptLoaderButton from "../../Components/Reusable/CptLoaderButton/CptLoaderButton";

const Wedding: React.FC = () => {
  const { updateCelebration } = useCelebrationContext();

  const [animate, setAnimate] = useState(true);

  const handleClick = () => {
    setAnimate((prev) => !prev);
  };

  useEffect(() => {
    updateCelebration(tresAniosData);
  }, []);

  return (
    <>
      <CptLoader fade={animate} />
      <CptLoaderButton onClick={handleClick} fade={animate} />
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
        <CptContainer type="margin" background="color">
          <CptGallery />
        </CptContainer>
        <CptContainer type="card" background="pictureB">
          <CptVerticalTimeline position="left" />
        </CptContainer>
      </CptWrapper>
    </>
  );
};

export default Wedding;
