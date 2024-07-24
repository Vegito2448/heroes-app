import { Link } from 'react-router-dom';
import { Hero } from "../../interfaces";

interface HeroCardProps {
  hero: Hero;
}

export const HeroCard = ({ hero }: HeroCardProps) => {
  return (
    <div
      className="col-12 col-md-3 col-lg-3 col-sm-4 m-3 animate__animated animate__fadeIn"
    >
      <div className="card">
        <img
          src={hero.images.lg}
          alt={hero.name}
          className="card-img-top img-fluid rounded w-100 shadow"
        />
        <div className="card-body">
          <h5 className="card-title">{hero.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {hero.biography.fullName}
          </h6>
          <p className="card-text">
            {
              hero.biography.alterEgos + " first appearance: " + hero.biography.firstAppearance
            }
          </p>
          <Link to={`hero/${hero.id}`} className="btn btn-primary">
            More...
          </Link>
        </div>
      </div>
    </div>
  );
};
