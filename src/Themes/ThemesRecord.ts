import { Theme } from "@mui/material";
import { ThemeType } from "../Types/types";
import {
  AlexBrushClasic,
  AlexBrushGreen,
  AlexBrushPink,
  AlexBrushWhite,
} from "./Pages/AlexBrush";

export const ThemesRecord: Record<ThemeType, Theme> = {
  Clasic: AlexBrushClasic,
  Green: AlexBrushGreen,
  Pink: AlexBrushPink,
  White: AlexBrushWhite,
};
