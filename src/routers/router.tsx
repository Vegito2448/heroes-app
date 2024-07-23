import {
  createBrowserRouter,
  RouteObject
} from "react-router-dom";
import { ErrorPage, Login, PublicRoute, Root } from "./routes";
import { routesConfig } from "./routesConfig";


export const allRoutes: RouteObject[] = [
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
];

export const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter(allRoutes);

