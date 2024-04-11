import { Typography } from "@mui/material";
import CptSplitBr from "../../Reusable/CptSplitBr/CptSplitBr";
import { useCelebrationContext } from "../../../Context/CelebrationContext";

const LblCelebrantsInvitationMessage: React.FC = () => {
  const {
    currentCelebrant: { invitationMessage },
  } = useCelebrationContext();

  return (
    <Typography variant="body1" color="text.primary">
      <CptSplitBr message={invitationMessage} />
    </Typography>
  );
};

export default LblCelebrantsInvitationMessage;
