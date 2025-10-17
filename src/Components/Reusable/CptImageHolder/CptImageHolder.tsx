import React from "react";
import { Box } from "@mui/material";
import ICptImageHolder from "../../../Interfaces/Components/ICptImageHolder";

const CptImageHolder: React.FC<ICptImageHolder> = ({
  imageUrl,
  size = 100,
  aspectRatio = "1/1",
}) => {
  return (
    <Box
      sx={{
        width: size === "100%" ? size : `${size}px`,
        height: size === "100%" ? "auto" : `${size}px`,
        aspectRatio: aspectRatio,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        filter: "grayscale(80%)",
        transition: "filter 0.3s ease, transform 0.3s ease",
        borderRadius: 1,
        overflow: "hidden",
        "&:hover": {
          filter: "none",
          transform: "scale(1.02)",
        },
      }}
    />
  );
};

export default CptImageHolder;
