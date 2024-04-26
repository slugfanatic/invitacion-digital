import IImageGallery from "../Interfaces/Components/IImageGallery";
import ITimeLineEvent from "../Interfaces/Components/ITimeLineEvent";

export type MaterialColorType =
  | "inherit"
  | "primary"
  | "secondary"
  | "grey"
  | "error"
  | "success"
  | "info"
  | "warning"
  | undefined;

export type BackgroundFillType =
  | "color"
  | "alternative"
  | "pictureH"
  | "pictureV"
  | "pictureB";

export type CptColorType = "primary" | "secondary";

export type PositionType = "left" | "right" | "alternate" | "alternate-reverse";

export type DistributionType = "left" | "right" | "middle";

export type ContainerType = "full" | "margin" | "card";

export type ShapeType = "circle" | "square";

export type GlassType = "lower" | "medium" | "high";

export type CptPaddingType = "small" | "medium" | "big";

export type CptVerticalSizeType =
  | "xsmall"
  | "small"
  | "medium"
  | "tall"
  | "xtall";

export type ThemeContextType = {
  currentTheme: string;
  changeTheme: (theme: string) => void;
  themeNames: string[];
};

export type CelebrationType = "¡Nos Casamos!" | "Mis Tres Años";

export type UrlType = string;

export type CelebrationInformationType = {
  celebrantsName: string;
  celebrationType: CelebrationType;
  invitationMessage: string;
  longMessage: string;
  celebrationDate: Date;
  imageH: UrlType;
  imageV: UrlType;
  imageB: UrlType;
  events: ITimeLineEvent[];
  imageGallery?: IImageGallery[];
};

export type CelebrationContextType = {
  currentCelebrant: CelebrationInformationType;
  updateCelebration: (theme: CelebrationInformationType) => void;
};
