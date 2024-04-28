import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const PruebaSobre = lazy(() => import("../Pages/PruebaSobre/PruebaSobre"));
const ThreeYears = lazy(() => import("../Pages/ThreeYears/ThreeYears"));
const Wedding = lazy(() => import("../Pages/Wedding/Wedding"));
const WeddingPage = lazy(() => import("../Pages/WeddingPage/WeddingPage"));
const WeddingPageClasic = lazy(
  () => import("../Pages/WeddingPageClasic/WeddingPageClasic")
);

export const WeddingRoutes: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/invitacion-digital/",
      element: (
        <Suspense>
          <ThreeYears />
        </Suspense>
      ),
    },
    {
      path: "/invitacion-digital/RafaellayBeni",
      element: (
        <Suspense>
          <Wedding />
        </Suspense>
      ),
    },
    {
      path: "/invitacion-digital/wedding",
      element: (
        <Suspense>
          <WeddingPage />
        </Suspense>
      ),
    },
    {
      path: "/invitacion-digital/clasic",
      element: (
        <Suspense>
          <WeddingPageClasic />
        </Suspense>
      ),
    },
    {
      path: "/invitacion-digital/prueba",
      element: (
        <Suspense>
          <PruebaSobre />
        </Suspense>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};
