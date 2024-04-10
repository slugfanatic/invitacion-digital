import { Stack } from "@mui/material";
import ICptWrapper from "../../../Interfaces/Components/ICptWrapper";

const CptWrapper: React.FC<ICptWrapper> = ({ children }) => {
  return <Stack>{children}</Stack>;
};

export default CptWrapper;
