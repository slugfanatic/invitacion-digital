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
    currentCelebrant: { imageH, imageH2, imageV, imageB },
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
      backgroundPosition: "top 10% center",
    },
    pictureH2: {
      backgroundImage: `url(${imageH2})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top 30% center",
    },
    pictureV: {
      backgroundImage: `url(${imageV})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top center",
    },
    pictureB: {
      backgroundImage: `url(${imageB})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top center",
    },
  };

  return (
    <Box
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
