import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";
import { Home, Contact, ErrorPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/portfolio2/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
