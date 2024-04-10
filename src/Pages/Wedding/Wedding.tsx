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
import { useThemeContext } from "../../Context/ThemeContext";

const Wedding: React.FC = () => {
  const { changeTheme } = useThemeContext();
  return (
    <CptWrapper>
      <div>
        {/* Cada botón cambia el tema cuando se hace clic */}
        <button onClick={() => changeTheme("Clasic")}>Clasic</button>
        <button onClick={() => changeTheme("Green")}>Green</button>
        <button onClick={() => changeTheme("Pink")}>Pink</button>
        <button onClick={() => changeTheme("White")}>White</button>
      </div>
      <CptContainer type="full" background="picture">
        <CptTranslucentLayer color="secondary" glass="lower">
          <PPCelebrantsPresentation />
        </CptTranslucentLayer>
      </CptContainer>
      <CptContainer type="margin" background="alternative">
        <CptPadding>
          <LblCelebrantsInvitationMessage />
        </CptPadding>
      </CptContainer>
      <CptContainer type="card" background="picture">
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
