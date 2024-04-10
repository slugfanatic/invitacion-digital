import { createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import TypographyBase from "./TypographyBase";
import TypographyBreakPoints from "./TypographyBreakPoints";

const base = deepmerge(TypographyBase, TypographyBreakPoints);

const FontAlexBrush = deepmerge(
  base,
  createTheme({
    typography: {
      h1: {
        fontFamily: "AlexBrush",
      },
      h2: {
        fontFamily: "GreatVibes",
      },
      h3: {
        fontFamily: "Caviar",
      },
      h4: {
        fontFamily: "Caviar",
      },
      h5: {
        fontFamily: "Caviar",
      },
      h6: {
        fontFamily: "Caviar",
      },
      subtitle1: {
        fontFamily: "Caviar",
      },
      subtitle2: {
        fontFamily: "Caviar",
      },
      body1: {
        fontFamily: "Caviar",
      },
      body2: {
        fontFamily: "Caviar",
      },
    },
  })
);

export default FontAlexBrush;
