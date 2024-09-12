import { createTheme } from "@mui/material";

const ColorPink = createTheme({
  palette: {
    primary: {
      main: "#F6CCCC",
      light: "#FFFFFF",
      dark: "#c89b9b",
      contrastText: "#000000",
    },
    secondary: {
      main: "#E1D4E9",
      light: "#f6eff6",
      dark: "#aba4ab",
      contrastText: "#000000",
    },
    info: {
      main: "#BBDFFC",
      light: "#eff8ff",
      dark: "#90bce8",
      contrastText: "#000000",
    },
    success: {
      main: "#C0E8D5",
      light: "#f3faf5",
      dark: "#90bca7",
      contrastText: "#000000",
    },
    warning: {
      main: "#FDF5E6",
      light: "#fef9ee",
      dark: "#d8cbb5",
      contrastText: "#000000",
    },
    error: {
      main: "#FFE5B4",
      light: "#fff5e0",
      dark: "#c8b89d",
      contrastText: "#000000",
    },
  },
});

export default ColorPink;
