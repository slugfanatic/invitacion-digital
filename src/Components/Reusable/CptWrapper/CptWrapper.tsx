import { Stack } from "@mui/material";
import { ConfigurationWrapper } from "../../../Wrappers";
import ICptWrapper from "../../../Interfaces/Components/ICptWrapper";

const CptWrapper: React.FC<ICptWrapper> = ({ children }) => {
  return (
    <ConfigurationWrapper>
      <Stack>{children}</Stack>
    </ConfigurationWrapper>
  );
};

export default CptWrapper;
