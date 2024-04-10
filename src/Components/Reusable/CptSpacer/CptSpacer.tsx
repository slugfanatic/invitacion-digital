import { Box } from "@mui/material";
import ICptSpacer from "../../../Interfaces/Components/ICptSpacer";

const CptSpacer: React.FC<ICptSpacer> = ({ vSize = "xsmall", height }) => {
  const sizeToMinHeight: Record<string, string> = {
    xsmall: "10vh",
    small: "20vh",
    medium: "35vh",
    tall: "45vh",
    xtall: "60vh",
  };

  return (
    <Box
      sx={{
        height: height ? `${height.toFixed(2)}px` : sizeToMinHeight[vSize],
      }}
    />
  );
};

export default CptSpacer;
