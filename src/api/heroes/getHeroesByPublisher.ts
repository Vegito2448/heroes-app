import { Hero } from "../../interfaces";

interface GetHeroesByPublisherProps {
  publisher: string;
}

export const getHeroesByPublisher = async ({ publisher }: GetHeroesByPublisherProps): Promise<Hero[] | Error> => {
  const url = 'https://akabab.github.io/superhero-api/api/all.json';
  const validPublishers = ['DC Comics', 'Marvel Comics'];

  try {
    if (!validPublishers.includes(publisher)) {
      throw new Error('Invalid publisher');
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error in the request');
    }

    const results = await response.json() as Hero[];

    if (!results.length) {
      throw new Error('There are no heroes');
    }

    const heroes = results.filter(hero => hero.biography.publisher === publisher);

    return heroes;

  } catch (error) {
    return error as Error;
  }
};
