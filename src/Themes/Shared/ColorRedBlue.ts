import { createTheme } from "@mui/material";

const ColorRedBlue = createTheme({
  palette: {
    primary: {
      main: "#D32F2F", // Rojo oscuro
      light: "#FF6659", // Rojo claro
      dark: "#9A0007", // Rojo más oscuro
      contrastText: "#ffffff", // Texto de contraste para Rojo
    },
    secondary: {
      main: "#1976D2", // Azul oscuro
      light: "#4791DB", // Azul claro
      dark: "#004BA0", // Azul más oscuro
      contrastText: "#ffffff", // Texto de contraste para Azul
    },
    info: {
      main: "#00ACC1", // Cian
      light: "#6EC6D3", // Cian claro
      dark: "#007C91", // Cian oscuro
      contrastText: "#000000", // Texto de contraste para Cian
    },
    success: {
      main: "#388E3C", // Verde oscuro
      light: "#66BB6A", // Verde claro
      dark: "#27632A", // Verde más oscuro
      contrastText: "#ffffff", // Texto de contraste para Verde
    },
    warning: {
      main: "#F57C00", // Naranja oscuro
      light: "#FFA040", // Naranja claro
      dark: "#BB4D00", // Naranja más oscuro
      contrastText: "#000000", // Texto de contraste para Naranja
    },
    error: {
      main: "#C62828", // Rojo (repetido aquí para completar la paleta)
      light: "#EF5350", // Rojo claro (repetido aquí para completar la paleta)
      dark: "#8E0000", // Rojo más oscuro (repetido aquí para completar la paleta)
      contrastText: "#ffffff", // Texto de contraste para Rojo (repetido aquí para completar la paleta)
    },
  },
});

export default ColorRedBlue;
