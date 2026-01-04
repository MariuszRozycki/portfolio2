import { createBrowserRouter } from "react-router-dom";
import { Root } from "./Root";
import { HomeRoute } from "./HomeRoute";
import { Resume } from "../pages/Resume";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <HomeRoute /> },
        { path: "project/:projectId", element: <HomeRoute /> },
        { path: "resume", element: <Resume /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);
