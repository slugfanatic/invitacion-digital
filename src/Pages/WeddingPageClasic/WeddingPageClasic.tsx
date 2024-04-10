import { CptWrapper } from "../../Components/Reusable";
import { PPCelebrantsPresentation } from "../../Components/PageParts";
import "./WeddingPageClasic.scss";

const WeddingPageClasic: React.FC = () => {
  return (
    <CptWrapper>
      <PPCelebrantsPresentation />
      <PPCelebrantsPresentation />
    </CptWrapper>
  );
};

export default WeddingPageClasic;
