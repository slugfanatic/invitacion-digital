import React from "react";
import { Box } from "@mui/material";
import ICptImageHolder from "../../../Interfaces/Components/ICptImageHolder";

const CptImageHolder: React.FC<ICptImageHolder> = ({
  imageUrl,
  size = 100,
}) => {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    ></Box>
  );
};

export default CptImageHolder;
