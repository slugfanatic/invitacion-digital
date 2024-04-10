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
      path: "/",
      element: <Wedding />,
    },
    {
      path: "/wedding",
      element: <WeddingPage />,
    },
    {
      path: "/clasic",
      element: <WeddingPageClasic />,
    },
  ]);

  return <RouterProvider router={router} />;
};
