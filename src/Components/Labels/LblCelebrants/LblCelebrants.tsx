import { Typography } from "@mui/material";
import { useCelebrationContext } from "../../../Context/CelebrationContext";

const LblCelebrants: React.FC = () => {
  const {
    currentCelebrant: { celebrantsName },
  } = useCelebrationContext();

  return (
    <Typography variant="h1" color="text.primary">
      {celebrantsName}
    </Typography>
  );
};

export default LblCelebrants;
