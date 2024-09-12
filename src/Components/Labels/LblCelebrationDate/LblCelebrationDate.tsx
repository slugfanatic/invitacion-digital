import { Typography } from "@mui/material";
import { formatDate } from "../../../Utils/formatDate";
import { useCelebrationContext } from "../../../Context/CelebrationContext";

const LblCelebrationDate: React.FC = () => {
  const {
    currentCelebrant: { celebrationDate },
  } = useCelebrationContext();

  return (
    <Typography variant="h4" color="text.primary">
      {formatDate(celebrationDate)}
    </Typography>
  );
};

export default LblCelebrationDate;
