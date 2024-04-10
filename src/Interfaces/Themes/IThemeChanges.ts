import { Theme } from "@mui/material";

interface IThemeChanges {
  palette?: Partial<Theme["palette"]>;
}

export default IThemeChanges;
