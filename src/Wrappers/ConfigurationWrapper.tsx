import React from "react";
import IChildrenProp from "../Interfaces/Base/IChildrenProp";
import { useThemeContext } from "../Context/ThemeContext";
import { Link } from "react-router-dom";

export const ConfigurationWrapper: React.FC<IChildrenProp> = ({ children }) => {
  const { currentTheme, changeTheme, themeNames } = useThemeContext();

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/invitacion-digital/">Inicio</Link>
          </li>
          <li>
            <Link to="/invitacion-digital/RafaellayBeni">Boda</Link>
          </li>
          <li>
            <Link to="/invitacion-digital/wedding">Página de Boda</Link>
          </li>
          <li>
            <Link to="/invitacion-digital/clasic">Página Clásica</Link>
          </li>
        </ul>
      </nav>

      <div>
        <select
          onChange={(e) => changeTheme(e.target.value)}
          value={currentTheme}
        >
          {themeNames.map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>
      </div>
      {children}
    </>
  );
};
