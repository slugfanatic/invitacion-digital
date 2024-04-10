import { Theme, createTheme } from "@mui/material";
import IThemeChanges from "../Interfaces/Themes/IThemeChanges";

const applyPaletteChanges = (theme: Theme, changes: IThemeChanges): Theme => {
  return createTheme({
    ...theme,
    ...(changes.palette && {
      palette: { ...theme.palette, ...changes.palette },
    }),
  });
};

export default applyPaletteChanges;
