import { RouteObject } from "react-router-dom";
import { DcScreen, MarvelScreen } from "./routes";



export type RouteConfig = RouteObject & {
  name?: string;
  children?: Array<RouteConfig>;
};

const routesConfig: Array<RouteConfig> = [
  {
    path: 'marvel',
    element: <MarvelScreen />,
    name: "Marvel Heroes",
  },
  {
    path: 'dc',
    element: <DcScreen />,
    name: "DC Heroes",
  }
];
export default routesConfig;