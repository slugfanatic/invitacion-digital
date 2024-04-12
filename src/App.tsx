import { WeddingRoutes } from "./Routes";
import { ConfigurationWrapper, ProvidersWrapper } from "./Wrappers";
import logo from "./logo.svg";

const App = () => {
  return (
    <ProvidersWrapper>
      <ConfigurationWrapper>
        <WeddingRoutes />
      </ConfigurationWrapper>
    </ProvidersWrapper>
  );
};

export default App;
