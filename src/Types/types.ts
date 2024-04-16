import ITimeLineEvent from "../Interfaces/Components/ITimeLineEvent";

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

export type ThemeType =
  | "Alex-W-Classic"
  | "Alex-B-Classic"
  | "Alex-W-Green"
  | "Alex-B-Green"
  | "Alex-W-Pink"
  | "Alex-B-Pink"
  | "Alex-W-White"
  | "Alex-B-White";

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
  events: ITimeLineEvent[];
};

export type CelebrationContextType = {
  currentCelebrant: CelebrationInformationType;
  updateCelebration: (theme: CelebrationInformationType) => void;
};
