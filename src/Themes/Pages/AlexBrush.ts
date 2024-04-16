import FontAlexBrush from "../Shared/FontAlexBrush";
import TypographyColorWhite from "../Shared/TypographyColorWhite";
import TypographyColorBlack from "../Shared/TypographyColorBlack";
import ColorRedBlue from "../Shared/ColorRedBlue";
import ColorGreenForest from "../Shared/ColorGreenForest";
import ColorPink from "../Shared/ColorPink";
import ColorWhiteSand from "../Shared/ColorWhiteSand";
import PaletteChanges from "../../Utils/PaletteChanges";
import PaletteTextChanges from "../../Utils/PaletteTextChanges";

const WColorRedBlue = PaletteTextChanges(ColorRedBlue, TypographyColorWhite);
const BColorRedBlue = PaletteTextChanges(ColorRedBlue, TypographyColorBlack);

const WColorGreen = PaletteTextChanges(ColorGreenForest, TypographyColorWhite);
const BColorGreen = PaletteTextChanges(ColorGreenForest, TypographyColorBlack);

const WColorPink = PaletteTextChanges(ColorPink, TypographyColorWhite);
const BColorPink = PaletteTextChanges(ColorPink, TypographyColorBlack);

const WColorWhite = PaletteTextChanges(ColorWhiteSand, TypographyColorWhite);
const BColorWhite = PaletteTextChanges(ColorWhiteSand, TypographyColorBlack);

const AlexBrushWClasic = PaletteChanges(FontAlexBrush, WColorRedBlue);
const AlexBrushBClasic = PaletteChanges(FontAlexBrush, BColorRedBlue);
const AlexBrushWGreen = PaletteChanges(FontAlexBrush, WColorGreen);
const AlexBrushBGreen = PaletteChanges(FontAlexBrush, BColorGreen);
const AlexBrushWPink = PaletteChanges(FontAlexBrush, WColorPink);
const AlexBrushBPink = PaletteChanges(FontAlexBrush, BColorPink);
const AlexBrushWWhite = PaletteChanges(FontAlexBrush, WColorWhite);
const AlexBrushBWhite = PaletteChanges(FontAlexBrush, BColorWhite);

export {
  AlexBrushWClasic,
  AlexBrushBClasic,
  AlexBrushWPink,
  AlexBrushBPink,
  AlexBrushWGreen,
  AlexBrushBGreen,
  AlexBrushWWhite,
  AlexBrushBWhite,
};
