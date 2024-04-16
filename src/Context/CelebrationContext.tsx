import { createContext, useContext, useState } from "react";
import {
  CelebrationContextType,
  CelebrationInformationType,
} from "../Types/types";
import IContextProvider from "../Interfaces/Themes/IContextProvider";
import { bodaData } from "../Utils/celebrationData";

const CelebrationContext = createContext<CelebrationContextType | null>(null);
export const useCelebrationContext = () =>
  useContext(CelebrationContext) as CelebrationContextType;

export const CelebrationContextProvider: React.FC<IContextProvider> = ({
  children,
}) => {
  const [currentCelebrant, setCurrentCelebrant] =
    useState<CelebrationInformationType>(bodaData);

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
