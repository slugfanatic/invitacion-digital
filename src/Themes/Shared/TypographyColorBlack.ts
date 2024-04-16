import { createTheme } from "@mui/material";

const TypographyColorBlack = createTheme({
  palette: {
    text: {
      primary: "rgba(0, 0, 0, 0.90)", // Texto principal (negro)
      secondary: "rgba(0, 0, 0, 0.80)", // Texto secundario (gris oscuro)
      disabled: "rgba(0, 0, 0, 0.70)", // Texto deshabilitado (gris más claro)
    },
  },
});

export default TypographyColorBlack;
