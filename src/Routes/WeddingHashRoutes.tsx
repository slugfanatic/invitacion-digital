import { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./WaveLoader.scss";

// Componente Wave Loader
const WaveLoader = () => (
  <div className="wave-loader-container">
    <div className="wave-loader-animation">
      <div className="wave-loader-bar"></div>
      <div className="wave-loader-bar"></div>
      <div className="wave-loader-bar"></div>
      <div className="wave-loader-bar"></div>
      <div className="wave-loader-bar"></div>
    </div>
    <p className="wave-loader-text">Cargando momentos especiales...</p>
  </div>
);

const PruebaSobre = lazy(() => import("../Pages/PruebaSobre/PruebaSobre"));
const ThreeYears = lazy(() => import("../Pages/ThreeYears/ThreeYears"));
const FifteenYears = lazy(() => import("../Pages/FifteenYears/FifteenYears"));
const Wedding = lazy(() => import("../Pages/Wedding/Wedding"));
const WeddingPage = lazy(() => import("../Pages/WeddingPage/WeddingPage"));
const WeddingPageClasic = lazy(
  () => import("../Pages/WeddingPageClasic/WeddingPageClasic")
);

export const WeddingHashRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={WaveLoader()}>
              <FifteenYears />
            </Suspense>
            
          }
        />
        <Route
          path="/ThreeYears"
          element={
            <Suspense fallback={WaveLoader()}>
              <ThreeYears />
            </Suspense>
          }
        />
        <Route
          path="/AngieyJulio"
          element={
            <Suspense fallback={WaveLoader()}>
              <Wedding />
            </Suspense>
          }
        />
        <Route
          path="/wedding"
          element={
            <Suspense fallback={WaveLoader()}>
              <WeddingPage />
            </Suspense>
          }
        />
        <Route
          path="/clasic"
          element={
            <Suspense fallback={WaveLoader()}>
              <WeddingPageClasic />
            </Suspense>
          }
        />
        <Route
          path="/prueba"
          element={
            <Suspense fallback={WaveLoader()}>
              <PruebaSobre />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};
