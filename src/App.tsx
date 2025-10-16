import { WeddingRoutes } from "./Routes";
import { WeddingHashRoutes } from "./Routes/WeddingHashRoutes";
import { ProvidersWrapper } from "./Wrappers";
import logo from "./logo.svg";

const App = () => {
  return (
    // <ProvidersWrapper>
    //   <WeddingRoutes />
    // </ProvidersWrapper>
    <ProvidersWrapper>
      <WeddingHashRoutes />
    </ProvidersWrapper>
  );
};

export default App;
