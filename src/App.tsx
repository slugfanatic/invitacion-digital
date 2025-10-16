// import { WeddingRoutes } from "./Routes";
import { WeddingHashRoutes } from "./Routes/WeddingHashRoutes";
import { ProvidersWrapper } from "./Wrappers";

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
