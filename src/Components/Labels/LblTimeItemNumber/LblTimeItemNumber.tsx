import { Typography } from "@mui/material";
import IChildrenProp from "../../../Interfaces/Base/IChildrenProp";

const LblTimeItemNumber: React.FC<IChildrenProp> = ({ children }) => {
  return <Typography variant="subtitle1" color="text.primary">{children}</Typography>;
};

export default LblTimeItemNumber;
