import {
  createBrowserRouter,
  RouteObject
} from "react-router-dom";
import { ErrorPage, Login, Root } from "./routes";
import { routesConfig } from "./routesConfig";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: routesConfig as RouteObject[],
    errorElement: ErrorPage()
  },
  {
    path: "/login",
    element: Login(),
  }
]);

