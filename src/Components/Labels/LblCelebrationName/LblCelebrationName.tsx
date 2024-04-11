import { Typography } from "@mui/material";
import { useCelebrationContext } from "../../../Context/CelebrationContext";

const LblCelebrationName: React.FC = () => {
  const {
    currentCelebrant: { celebrationType: type },
  } = useCelebrationContext();

  return (
    <Typography variant="h2" color="text.secondary">
      {type}
    </Typography>
  );
};

export default LblCelebrationName;
