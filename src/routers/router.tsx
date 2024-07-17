import {
  createBrowserRouter,
  RouteObject
} from "react-router-dom";
import { ErrorPage, Login, PublicRoute, Root } from "./routes";
import { routesConfig } from "./routesConfig";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <PublicRoute children={<Login />} />,
  },
  {
    path: "/",
    element: <Root />,
    children: routesConfig as RouteObject[],
    errorElement: <ErrorPage />
  },
]);

