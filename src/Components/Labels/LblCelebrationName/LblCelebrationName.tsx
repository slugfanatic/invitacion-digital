import { Typography } from "@mui/material";
import { useCelebrationContext } from "../../../Context/CelebrationContext";
import { CelebrationLabels } from "../../../Types/types";

const LblCelebrationName: React.FC = () => {
  const {
    currentCelebrant: { celebrationType: type },
  } = useCelebrationContext();

  return (
    <Typography variant="h1" color="text.secondary">
      {CelebrationLabels[type]}
    </Typography>
  );
};

export default LblCelebrationName;
