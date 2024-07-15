import { Hero } from "../../interfaces";


export const getHeroes = async (): Promise<Hero[] | Error> => {
  const url = 'https://akabab.github.io/superhero-api/api/all.json';

  try {

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error in the request');
    }

    const heroes = await response.json() as Hero[];

    if (!heroes.length) {
      throw new Error('There are no heroes');
    }

    return heroes;

  } catch (error) {
    return error as Error;
  }
};
