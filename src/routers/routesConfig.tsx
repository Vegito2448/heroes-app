import queryString from "query-string";
import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { getHeroById, getHeroes, getHeroesByPublisher } from "../api";
import { DcScreen, HeroScreen, MarvelScreen, PrivateRoute, SearchScreen } from "./routes";

const createLoaderForPublisher = (publisher: string) => async () => {
  const heroes = await getHeroesByPublisher({ publisher });
  return { heroes };
};

const routesConfig = [
  {
    path: 'marvel',
    loader: createLoaderForPublisher("Marvel Comics"),
    element: <PrivateRoute children={<MarvelScreen />} />,
    title: "Marvel Heroes"
  },
  {
    path: 'dc',
    loader: createLoaderForPublisher("DC Comics"),
    element: <PrivateRoute children={<DcScreen />} />,
    title: "DC Heroes"
  },
  {
    path: "hero/:heroId",
    element: <PrivateRoute children={<HeroScreen />} />,
    loader: async ({ params: { heroId: id } }: LoaderFunctionArgs) => {
      if (isNaN(Number(id)) || !id) {
        return redirect('/');
      }


      const hero = await getHeroById({
        id
      });

      if (hero instanceof Error || !hero) {
        return redirect('/');
      }

      return {
        hero
      };
    },
  },
  {
    path: 'search',
    element: <PrivateRoute children={<SearchScreen />} />,
    loader: async ({ request }: LoaderFunctionArgs) => {
      const { url } = request;

      const { q = '' } = queryString.parse(url.split('?')[1]);

      if (!q) {
        return {};
      }

      const allHeroes = await getHeroes();

      const heroes = Array.isArray(allHeroes) ? allHeroes.filter(({ name }) => name.toLowerCase().includes(String(q).toLowerCase())) : allHeroes;

      return {
        heroes
      };
    },
    title: "Search Heroes"
  }
];
export { routesConfig };

