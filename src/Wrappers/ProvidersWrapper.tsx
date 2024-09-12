import { ThemeContextProvider } from "../Context/ThemeContext";
import { CelebrationContextProvider } from "../Context/CelebrationContext";
import IChildrenProp from "../Interfaces/Base/IChildrenProp";

export const ProvidersWrapper: React.FC<IChildrenProp> = ({ children }) => {
  return (
    <ThemeContextProvider>
      <CelebrationContextProvider>{children}</CelebrationContextProvider>
    </ThemeContextProvider>
  );
};
