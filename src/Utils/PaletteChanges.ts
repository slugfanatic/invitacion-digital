import { Theme, createTheme } from "@mui/material";
import IThemeChanges from "../Interfaces/Themes/IThemeChanges";

const PaletteChanges = (theme: Theme, changes: IThemeChanges): Theme => {
  return createTheme({
    ...theme,
    ...(changes.palette && {
      palette: { ...theme.palette, ...changes.palette },
    }),
  });
};

export default PaletteChanges;
