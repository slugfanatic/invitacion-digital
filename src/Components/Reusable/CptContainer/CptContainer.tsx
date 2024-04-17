import React from "react";
import { Box, Theme } from "@mui/material";
import ICptContainer from "../../../Interfaces/Components/ICptContainer";
import { useCelebrationContext } from "../../../Context/CelebrationContext";

const CptContainer: React.FC<ICptContainer> = ({
  children,
  type,
  background,
}) => {
  const {
    currentCelebrant: { imageH, imageV, imageB },
  } = useCelebrationContext();

  const marginValues = {
    full: "0%",
    margin: "1%",
    card: "3% 8% 3% 8%",
  };

  const backgroundValues = {
    color: { backgroundColor: (theme: Theme) => theme.palette.primary.main },
    alternative: {
      backgroundColor: (theme: Theme) => theme.palette.secondary.main,
    },
    pictureH: {
      backgroundImage: `url(${imageH})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
    },
    pictureV: {
      backgroundImage: `url(${imageV})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
    },
    pictureB: {
      backgroundImage: `url(${imageB})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom center",
    },
  };

  return (
    <Box
      className="test"
      sx={{
        margin: marginValues[type],
        ...(background && backgroundValues[background]),
      }}
    >
      {children}
    </Box>
  );
};

export default CptContainer;
