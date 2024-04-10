import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Wedding = lazy(() => import("../Pages/Wedding/Wedding"));
const WeddingPage = lazy(() => import("../Pages/WeddingPage/WeddingPage"));
const WeddingPageClasic = lazy(
  () => import("../Pages/WeddingPageClasic/WeddingPageClasic")
);

export const WeddingRoutes: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/invitacion-digital/",
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
