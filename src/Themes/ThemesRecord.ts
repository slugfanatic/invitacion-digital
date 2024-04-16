import { Theme } from "@mui/material";
import ColorRedBlue from "./Shared/ColorRedBlue";
import ColorGreenForest from "./Shared/ColorGreenForest";
import ColorPink from "./Shared/ColorPink";
import ColorWhiteSand from "./Shared/ColorWhiteSand";

import TypographyColorWhite from "./Shared/TypographyColorWhite";
import TypographyColorBlack from "./Shared/TypographyColorBlack";

import PaletteTextChanges from "../Utils/PaletteTextChanges";
import PaletteChanges from "../Utils/PaletteChanges";
import FontAlexBrush from "./Shared/FontAlexBrush";

const colors = [
  { name: "RedBlue", color: ColorRedBlue },
  { name: "Green", color: ColorGreenForest },
  { name: "Pink", color: ColorPink },
  { name: "White", color: ColorWhiteSand },
];

const typographyStyles = [
  { name: "White", style: TypographyColorWhite },
  { name: "Black", style: TypographyColorBlack },
];

const ThemesRecord: Record<string, Theme> = {};

colors.forEach((color) => {
  typographyStyles.forEach((typography) => {
    const key = `AlexBrush-${color.name}-${typography.name.charAt(0)}`;
    const palette = PaletteTextChanges(color.color, typography.style);
    ThemesRecord[key] = PaletteChanges(FontAlexBrush, palette);
  });
});

export default ThemesRecord;
