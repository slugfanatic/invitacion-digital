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
      invitationMessage:
        "¡Estamos emocionados de invitarlos a la fiesta de cumpleaños de nuestra pequeña Rafaella! Va a cumplir 3 años y queremos celebrarlo en grande.<br />" +
        "Habrá música, juegos y muchas sorpresas más. Además, no te pierdas nuestra deliciosa comida y pastel.",
      longMessage:
        "Mi Querida Rafaella,<br />" +
        "Hoy, mientras te escribimos esta carta, tú estás dando tus primeros pasos hacia un mundo lleno de aventuras y descubrimientos. Parece que fue ayer cuando llegaste a nuestras vidas, iluminando cada rincón con tu risa contagiosa y tus ojos curiosos que exploran el mundo que te rodea.<br />" +
        "Mañana, celebraremos tu tercer cumpleaños. Tres años de amor incondicional, de abrazos cálidos y de momentos que atesoraremos por siempre en nuestros corazones. En este día especial, queremos invitarte a una fiesta que será mucho más que una celebración. Será un recordatorio de todo lo maravilloso que eres y de lo afortunados que somos de tenerte en nuestras vidas.<br />" +
        "Te prometemos que la fiesta estará llena de alegría y diversión, con juegos que despierten tu imaginación y risas que llenen el aire. Habrá música que te haga bailar y comida deliciosa que deleitará tu paladar. Pero sobre todo, habrá amor. Mucho amor, el mismo amor que nos ha unido desde el primer día y que seguirá creciendo con cada paso que des.<br />" +
        "Queremos que sepas que este día es especial porque tú eres especial. Eres la luz que brilla en nuestros días más oscuros y la razón por la que nuestros corazones laten con tanta fuerza. Esperamos con ansias ver esa sonrisa radiante en tu rostro mientras celebramos juntos este nuevo año de vida que comienza para ti.<br />" +
        "Así que prepárate, mi pequeña aventurera, porque te espera una fiesta que quedará grabada en tu memoria para siempre. Estamos emocionados de compartir este día contigo y de crear recuerdos que perdurarán a lo largo del tiempo.<br />" +
        "Con todo nuestro amor,<br />" +
        "Tus Papas",
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
