import React from "react";
import { ThemeContextProvider } from "../Context/ThemeContext";
import IChildrenProp from "../Interfaces/Base/IChildrenProp";

export const ProvidersWrapper: React.FC<IChildrenProp> = ({ children }) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
};
