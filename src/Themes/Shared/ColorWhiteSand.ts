import { createTheme } from "@mui/material";

const ColorWhiteSand = createTheme({
  palette: {
    primary: {
      main: "#F5F5DC", // Arena Blanca
      light: "#ffffff", // Blanco
      dark: "#dcdcdc", // Gris claro
      contrastText: "#000000", // Texto de contraste para Arena Blanca
    },
    secondary: {
      main: "#87CEEB", // Azul Cielo Claro
      light: "#b0e2ff", // Azul Claro
      dark: "#5f9ea0", // Azul más oscuro
      contrastText: "#000000", // Texto de contraste para Azul Cielo Claro
    },
    info: {
      main: "#AFEEEE", // Verde Agua
      light: "#e0ffff", // Cyan más claro
      dark: "#7fffd4", // Verde Cian más oscuro
      contrastText: "#000000", // Texto de contraste para Verde Agua
    },
    success: {
      main: "#FFDAB9", // Coral Claro
      light: "#ffe4c4", // Coral más claro
      dark: "#f0e68c", // Amarillo mostaza
      contrastText: "#000000", // Texto de contraste para Coral Claro
    },
    warning: {
      main: "#FFFFF0", // Marfil
      light: "#fffff5", // Marfil más claro
      dark: "#fffacd", // Amarillo claro
      contrastText: "#000000", // Texto de contraste para Marfil
    },
    error: {
      main: "#FFFACD", // Amarillo Pastel
      light: "#fffacd", // Amarillo más claro
      dark: "#fafad2", // Amarillo más oscuro
      contrastText: "#000000", // Texto de contraste para Amarillo Pastel
    },
    text: {
      primary: "rgba(0, 0, 0, 0.90)", // Texto principal (negro)
      secondary: "rgba(0, 0, 0, 0.80)", // Texto secundario (gris oscuro)
      disabled: "rgba(0, 0, 0, 0.70)", // Texto deshabilitado (gris más claro)
    },
  },
});

export default ColorWhiteSand;
