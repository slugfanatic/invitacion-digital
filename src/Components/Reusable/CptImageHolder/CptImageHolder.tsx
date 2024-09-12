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
        filter: "grayscale(80%)",
        transition: "filter 0.3s ease",
        "&:hover": {
          filter: "none",
        },
      }}
    ></Box>
  );
};

export default CptImageHolder;
