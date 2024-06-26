import FontAlexBrush from "../Shared/FontAlexBrush";
import ColorGreenForest from "../Shared/ColorGreenForest";
import ColorPink from "../Shared/ColorPink";
import ColorWhiteSand from "../Shared/ColorWhiteSand";
import applyPaletteChanges from "../../Utils/PaletteChanges";

const AlexBrushClasic = FontAlexBrush;
const AlexBrushGreen = applyPaletteChanges(FontAlexBrush, ColorGreenForest);
const AlexBrushPink = applyPaletteChanges(FontAlexBrush, ColorPink);
const AlexBrushWhite = applyPaletteChanges(FontAlexBrush, ColorWhiteSand);

export { AlexBrushClasic, AlexBrushPink, AlexBrushGreen, AlexBrushWhite };
