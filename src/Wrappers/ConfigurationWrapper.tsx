import React from "react";
import IChildrenProp from "../Interfaces/Base/IChildrenProp";
import { useThemeContext } from "../Context/ThemeContext";
import { useCelebrationContext } from "../Context/CelebrationContext";
import { bodaData, tresAniosData } from "../Utils/celebrationData";

export const ConfigurationWrapper: React.FC<IChildrenProp> = ({ children }) => {
  const { changeTheme, themeNames } = useThemeContext();
  const { updateCelebration } = useCelebrationContext();

  const setBoda = () => {
    updateCelebration(bodaData);
  };

  const setTresAños = () => {
    updateCelebration(tresAniosData);
  };

  return (
    <>
      <div>
        <select onChange={(e) => changeTheme(e.target.value)}>
          {themeNames.map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={() => setBoda()}>Boda</button>
        <button onClick={() => setTresAños()}>3 Años</button>
      </div>
      {children}
    </>
  );
};
