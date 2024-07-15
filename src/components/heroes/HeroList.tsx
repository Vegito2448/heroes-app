import { useLoaderData } from "react-router-dom";
import { Hero } from "../../interfaces";
import { HeroCard } from './HeroCard';


export const HeroList = () => {

  const data = useLoaderData() as { heroes: Hero[] | Error; };

  const heroes = data?.heroes;

  return (
    <div className="row no-gutters animate__animated animate__fadeIn">
      {Array.isArray(heroes) && heroes.length ? heroes.map((hero: Hero) => (
        <HeroCard key={hero.id} hero={hero} />
      )) :
        <div className="alert alert-danger" role="alert">
          No heroes found
        </div>
      }
    </div>
  );
};
