import { createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import TypographyBase from "./TypographyBase";
import TypographyBreakPoints from "./TypographyBreakPoints";

const base = deepmerge(TypographyBase, TypographyBreakPoints);

const FontAllura = deepmerge(
  base,
  createTheme({
    typography: {
      h1: {
        fontFamily: "Allura",
      },
      h2: {
        fontFamily: "Sofia",
      },
      h3: {
        fontFamily: "JosefinSans",
      },
      h4: {
        fontFamily: "JosefinSans",
      },
      h5: {
        fontFamily: "JosefinSans",
      },
      h6: {
        fontFamily: "JosefinSans",
      },
      subtitle1: {
        fontFamily: "JosefinSans",
      },
      subtitle2: {
        fontFamily: "JosefinSans",
      },
      body1: {
        fontFamily: "JosefinSans",
      },
      body2: {
        fontFamily: "JosefinSans",
      },
    },
  })
);

export default FontAllura;
