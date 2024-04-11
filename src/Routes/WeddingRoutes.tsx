import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
      element: <ThreeYears />,
    },
    {
      path: "/invitacion-digital/RafaellayBeni",
      element: <Wedding />,
    },
    {
      path: "/invitacion-digital/wedding",
      element: <WeddingPage />,
    },
    {
      path: "/invitacion-digital/clasic",
      element: <WeddingPageClasic />,
    },
  ]);

  return <RouterProvider router={router} />;
};
