import { Typography } from "@mui/material";
import { formatDate } from "../../../Utils/formatDate";

const LblCelebrationDate: React.FC = () => {
  return (
    <Typography variant="h4" color="text.primary">
      {formatDate(new Date("2024-06-08 13:30:00"))}
    </Typography>
  );
};

export default LblCelebrationDate;
