import { Theme } from "@mui/material";
import ColorRedBlue from "./Shared/ColorRedBlue";
import ColorGreenForest from "./Shared/ColorGreenForest";
import ColorPink from "./Shared/ColorPink";
import ColorWhiteSand from "./Shared/ColorWhiteSand";

import TypographyColorWhite from "./Shared/TypographyColorWhite";
import TypographyColorBlack from "./Shared/TypographyColorBlack";

import FontAlexBrush from "./Shared/FontAlexBrush";
import FontAllura from "./Shared/FontAllura";
import FontMiama from "./Shared/FontMiama";

import PaletteTextChanges from "../Utils/PaletteTextChanges";
import PaletteChanges from "../Utils/PaletteChanges";

const colors = [
  { name: "RedBlue", theme: ColorRedBlue },
  { name: "Green", theme: ColorGreenForest },
  { name: "Pink", theme: ColorPink },
  { name: "White", theme: ColorWhiteSand },
];

const typographyStyles = [
  { name: "White", theme: TypographyColorWhite },
  { name: "Black", theme: TypographyColorBlack },
];

const fonts = [
  { name: "Alex", theme: FontAlexBrush },
  { name: "Allura", theme: FontAllura },
  { name: "Miama", theme: FontMiama },
];

const ThemesRecord: Record<string, Theme> = {};

colors.forEach((color) => {
  typographyStyles.forEach((typography) => {
    fonts.forEach((font) => {
      const key = `${font.name}-${color.name}-${typography.name.charAt(0)}`;
      const palette = PaletteTextChanges(color.theme, typography.theme);
      ThemesRecord[key] = PaletteChanges(font.theme, palette);
    });
  });
});

export default ThemesRecord;
