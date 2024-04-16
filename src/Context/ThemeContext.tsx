import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { ThemeContextType, ThemeType } from "../Types/types";
import { ThemesRecord } from "../Themes/ThemesRecord";
import IContextProvider from "../Interfaces/Themes/IContextProvider";

const ThemeContext = createContext<ThemeContextType | null>(null);
export const useThemeContext = () =>
  useContext(ThemeContext) as ThemeContextType;

export const ThemeContextProvider: React.FC<IContextProvider> = ({
  children,
}) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>("Alex-W-Classic");

  const changeTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
  };

  console.log(ThemesRecord[currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      <ThemeProvider theme={ThemesRecord[currentTheme]}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
