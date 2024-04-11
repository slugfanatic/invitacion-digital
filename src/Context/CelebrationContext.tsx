import { createContext, useContext, useState } from "react";
import {
  CelebrationContextType,
  CelebrationInformationType,
} from "../Types/types";
import IThemeContextProvider from "../Interfaces/Themes/IThemeContextProvider";

const CelebrationContext = createContext<CelebrationContextType | null>(null);
export const useCelebrationContext = () =>
  useContext(CelebrationContext) as CelebrationContextType;

export const CelebrationContextProvider: React.FC<IThemeContextProvider> = ({
  children,
}) => {
  const [currentCelebrant, setCurrentCelebrant] =
    useState<CelebrationInformationType>({
      celebrantsName: "Rafaella",
      celebrationType: "Mis Tres Años",
    });

  const updateCelebration = (celebrationInfo: CelebrationInformationType) => {
    setCurrentCelebrant(celebrationInfo);
  };

  return (
    <CelebrationContext.Provider
      value={{ currentCelebrant, updateCelebration }}
    >
      {children}
    </CelebrationContext.Provider>
  );
};
