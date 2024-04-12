export type AlignType =
  | "inherit"
  | "left"
  | "right"
  | "center"
  | "justify"
  | undefined;

export type BackgroundFillType =
  | "color"
  | "alternative"
  | "pictureH"
  | "pictureV";

export type ColorType =
  | "inherit"
  | "primary"
  | "secondary"
  | "grey"
  | "error"
  | "success"
  | "info"
  | "warning"
  | undefined;

export type ContainerType = "full" | "margin" | "card";

export type ThemeType = "Classic" | "Green" | "Pink" | "White";

export type ThemeContextType = {
  currentTheme: ThemeType;
  changeTheme: (theme: ThemeType) => void;
};

export type CelebrationType = "¡Nos Casamos!" | "Mis Tres Años";

export type CelebrationInformationType = {
  celebrantsName: string;
  celebrationType: CelebrationType;
  invitationMessage: string;
  longMessage: string;
  celebrationDate: Date;
  imageH: string;
  imageV: string;
};

export type CelebrationContextType = {
  currentCelebrant: CelebrationInformationType;
  updateCelebration: (theme: CelebrationInformationType) => void;
};
