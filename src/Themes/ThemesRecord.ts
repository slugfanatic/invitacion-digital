import { Theme } from "@mui/material";
import { ThemeType } from "../Types/types";
import {
  AlexBrushWClasic,
  AlexBrushBClasic,
  AlexBrushWGreen,
  AlexBrushBGreen,
  AlexBrushWPink,
  AlexBrushBPink,
  AlexBrushWWhite,
  AlexBrushBWhite,
} from "./Pages/AlexBrush";

export const ThemesRecord: Record<ThemeType, Theme> = {
  "Alex-W-Classic": AlexBrushWClasic,
  "Alex-B-Classic": AlexBrushBClasic,
  "Alex-W-Green": AlexBrushWGreen,
  "Alex-B-Green": AlexBrushBGreen,
  "Alex-W-Pink": AlexBrushWPink,
  "Alex-B-Pink": AlexBrushBPink,
  "Alex-W-White": AlexBrushWWhite,
  "Alex-B-White": AlexBrushBWhite,
};
