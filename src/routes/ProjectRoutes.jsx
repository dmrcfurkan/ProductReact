import { useRoutes } from "react-router-dom";

import { CreateRoute } from "../pages/CreateProduct/route";
import App from "../App";
import { DetailRoute } from "../pages/Details/route";
import { ProductCardsRoute } from "../components/ProductCards/route";

const routes = [
  {
    path: "/",
    element: <App />,

    children: [...ProductCardsRoute, ...CreateRoute, ...DetailRoute],
  },
];

export const ProjectRoute = () => {
  const element = useRoutes([...routes]);
  return element;
};
