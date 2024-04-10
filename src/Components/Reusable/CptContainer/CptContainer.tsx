import React from "react";
import { Box, Theme } from "@mui/material";
import ICptContainer from "../../../Interfaces/Components/ICptContainer";

const CptContainer: React.FC<ICptContainer> = ({
  children,
  type,
  background,
}) => {
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
    picture: {
      backgroundImage: `url("https://angyyjulio.com/assets/img/slider/slide-1.jpg")`,
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
