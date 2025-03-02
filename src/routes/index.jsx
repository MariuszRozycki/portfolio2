import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";
import { Home, Contact } from "../pages";

const router = createBrowserRouter([
  {
    path: "/portfolio2/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
