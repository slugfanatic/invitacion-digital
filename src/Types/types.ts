export type AlignType =
  | "inherit"
  | "left"
  | "right"
  | "center"
  | "justify"
  | undefined;

export type BackgroundFillType = "color" | "alternative" | "picture";

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

export type ThemeType = "Clasic" | "Green" | "Pink" | "White";

export type ThemeContextType = {
  currentTheme: ThemeType;
  changeTheme: (theme: ThemeType) => void;
};
