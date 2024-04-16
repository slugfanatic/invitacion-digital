import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { ThemeContextType } from "../Types/types";
import ThemesRecord from "../Themes/ThemesRecord";
import IContextProvider from "../Interfaces/Themes/IContextProvider";

const ThemeContext = createContext<ThemeContextType | null>(null);
export const useThemeContext = () =>
  useContext(ThemeContext) as ThemeContextType;

export const ThemeContextProvider: React.FC<IContextProvider> = ({
  children,
}) => {
  const [currentTheme, setCurrentTheme] = useState<string>(
    "AlexBrush-RedBlue-W"
  );

  const changeTheme = (theme: string) => {
    if (ThemesRecord.hasOwnProperty(theme)) {
      setCurrentTheme(theme);
    } else {
      console.error(`El tema '${theme}' no existe.`);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      <ThemeProvider theme={ThemesRecord[currentTheme]}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
