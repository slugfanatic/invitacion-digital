import { Theme, createTheme } from "@mui/material";
import IThemeChanges from "../Interfaces/Themes/IThemeChanges";

const PaletteTextChanges = (theme: Theme, changes: IThemeChanges): Theme => {
  return createTheme({
    ...theme,
    palette: {
      ...theme.palette,
      ...(changes.palette?.text && {
        text: { ...theme.palette.text, ...changes.palette?.text },
      }),
    },
  });
};

export default PaletteTextChanges;
