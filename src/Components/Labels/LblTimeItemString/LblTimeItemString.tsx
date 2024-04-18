import { Typography } from "@mui/material";
import IChildrenProp from "../../../Interfaces/Base/IChildrenProp";

const LblTimeItemString: React.FC<IChildrenProp> = ({ children }) => {
  return (
    <Typography variant="body2" color="text.primary">
      {children}
    </Typography>
  );
};

export default LblTimeItemString;
