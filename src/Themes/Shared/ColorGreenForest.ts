import { createTheme } from "@mui/material";

const ColorGreenForest = createTheme({
  palette: {
    primary: {
      main: "#556B2F", // Verde Musgo
      light: "#8FBC8F", // Verde Claro
      dark: "#2F4F4F", // Verde Oscuro
      contrastText: "#ffffff", // Texto de contraste para Verde Musgo
    },
    secondary: {
      main: "#6B8E23", // Verde Oliva
      light: "#9ACD32", // Verde Claro
      dark: "#556B2F", // Verde Oscuro
      contrastText: "#ffffff", // Texto de contraste para Verde Oliva
    },
    info: {
      main: "#228B22", // Verde Bosque
      light: "#32CD32", // Verde Claro
      dark: "#006400", // Verde Oscuro
      contrastText: "#ffffff", // Texto de contraste para Verde Bosque
    },
    success: {
      main: "#2E8B57", // Verde Menta Oscuro
      light: "#3CB371", // Verde Claro
      dark: "#228B22", // Verde Oscuro
      contrastText: "#ffffff", // Texto de contraste para Verde Menta Oscuro
    },
    warning: {
      main: "#186D18", // Verde Pino
      light: "#228B22", // Verde Claro
      dark: "#006400", // Verde Oscuro
      contrastText: "#ffffff", // Texto de contraste para Verde Pino
    },
    error: {
      main: "#7FFFD4", // Verde Agua
      light: "#AFEEEE", // Verde Claro
      dark: "#40E0D0", // Verde Oscuro
      contrastText: "#000000", // Texto de contraste para Verde Agua
    },
    text: {
      primary: "rgba(255, 255, 255, 0.90)", // Texto principal (blanco)
      secondary: "rgba(255, 255, 255, 0.70)", // Texto secundario (gris claro)
      disabled: "rgba(255, 255, 255, 0.50)", // Texto deshabilitado (gris más claro)
    },
  },
});

export default ColorGreenForest;
