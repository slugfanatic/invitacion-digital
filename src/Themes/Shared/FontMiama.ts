import { createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import TypographyBase from "./TypographyBase";
import TypographyBreakPoints from "./TypographyBreakPoints";

const base = deepmerge(TypographyBase, TypographyBreakPoints);

const FontMiama = deepmerge(
  base,
  createTheme({
    typography: {
      h1: {
        fontFamily: "Miama",
      },
      h2: {
        fontFamily: "Quicksand-Italic",
      },
      h3: {
        fontFamily: "Montserrat",
      },
      h4: {
        fontFamily: "Montserrat",
      },
      h5: {
        fontFamily: "Montserrat",
      },
      h6: {
        fontFamily: "Montserrat",
      },
      subtitle1: {
        fontFamily: "Montserrat",
      },
      subtitle2: {
        fontFamily: "Montserrat",
      },
      body1: {
        fontFamily: "Montserrat",
      },
      body2: {
        fontFamily: "Montserrat",
      },
    },
  })
);

export default FontMiama;
