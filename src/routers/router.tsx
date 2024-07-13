import {
  createBrowserRouter
} from "react-router-dom";
import { ErrorPage, Login, Root } from "./routes";
import routesConfig from "./routesConfig";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: routesConfig,
    errorElement: ErrorPage()
  },
  {
    path: "/login",
    element: Login(),
  }
]);

