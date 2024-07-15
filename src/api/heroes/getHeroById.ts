import { Hero } from "../../interfaces";

interface GetHeroByIdProps {
  id: number | string;
}
export const getHeroById = async ({ id }: GetHeroByIdProps): Promise<Hero | Error> => {
  const url = `https://akabab.github.io/superhero-api/api/id/${id}.json`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error in the request');
    }

    const result = await response.json() as Hero;

    return result;
  } catch (error) {
    return error as Error;
  }

};