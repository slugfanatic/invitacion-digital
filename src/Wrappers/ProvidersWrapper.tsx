import React from "react";
import { ThemeContextProvider } from "../Context/ThemeContext";
import IChildrenProp from "../Interfaces/Base/IChildrenProp";
import { CelebrationContextProvider } from "../Context/CelebrationContext";

export const ProvidersWrapper: React.FC<IChildrenProp> = ({ children }) => {
  return (
    <ThemeContextProvider>
      <CelebrationContextProvider>{children}</CelebrationContextProvider>
    </ThemeContextProvider>
  );
};
