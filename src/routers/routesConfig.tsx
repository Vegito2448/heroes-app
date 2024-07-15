import queryString from "query-string";
import { redirect, RouteObject } from "react-router-dom";
import { getHeroById, getHeroes, getHeroesByPublisher } from "../api";
import { DcScreen, HeroScreen, MarvelScreen, SearchScreen } from "./routes";

const createLoaderForPublisher = (publisher: string) => async () => {
  const heroes = await getHeroesByPublisher({ publisher });
  return { heroes };
};

const routesConfig = [
  {
    path: 'marvel',
    loader: createLoaderForPublisher("Marvel Comics"),
    element: <MarvelScreen />,
    title: "Marvel Heroes"
  },
  {
    path: 'dc',
    loader: createLoaderForPublisher("DC Comics"),
    element: <DcScreen />,
    title: "DC Heroes"
  },
  {
    path: "hero/:heroId",
    element: <HeroScreen />,
    loader: async ({ params: { heroId: id } }) => {
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
    element: <SearchScreen />,
    loader: async ({ request }) => {
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
] as RouteObject[];
export { routesConfig };

