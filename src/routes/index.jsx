import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";
import { Home } from "../pages";

const router = createBrowserRouter([
  {
    path: "/portfolio2/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export default router;
