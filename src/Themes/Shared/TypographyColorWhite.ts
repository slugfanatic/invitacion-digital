import { createTheme } from "@mui/material";

const TypographyColorWhite = createTheme({
  palette: {
    text: {
      primary: "rgba(255, 255, 255, 0.90)", // Texto principal (blanco)
      secondary: "rgba(255, 255, 255, 0.80)", // Texto secundario (gris claro)
      disabled: "rgba(255, 255, 255, 0.70)", // Texto deshabilitado (gris más claro)
    },
  },
});

export default TypographyColorWhite;
