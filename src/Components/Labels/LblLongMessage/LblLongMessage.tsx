import { Typography } from "@mui/material";
import CptSplitBr from "../../Reusable/CptSplitBr/CptSplitBr";
import { useCelebrationContext } from "../../../Context/CelebrationContext";

const LblLongMessage: React.FC = () => {
  const {
    currentCelebrant: { longMessage },
  } = useCelebrationContext();

  return (
    <Typography variant="body2" color="text.secondary">
      <CptSplitBr message={longMessage} />
    </Typography>
  );
};

export default LblLongMessage;
