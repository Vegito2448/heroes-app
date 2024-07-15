import { useLoaderData, useNavigate } from "react-router-dom";
import { Hero } from "../../interfaces";

export const HeroScreen = () => {

  const navigate = useNavigate();

  const { hero } = useLoaderData() as { hero: Hero; };

  const handleReturn = () => {
    if (window.history.length <= 2) {
      navigate("/");
    } else
      navigate(-1);
  };

  return (
    <div
      className="row mt-5"
    >
      <div className="col-4">
        <img
          src={hero.images.lg}
          alt={hero.name}
          className="img-thumbnail rounded shadow animate__animated animate__fadeInLeft"
        />
      </div>
      <div
        className="col-8 animate__animated animate__fadeIn"
      >
        <h3>{hero.name}</h3>
        <ul
          className="list-group list-group-flush"
        >
          <li
            className="list-group-item"
          >
            <b>Alter ego:</b> {hero.biography.alterEgos}
          </li>
          <li
            className="list-group-item"
          >
            <b>First appearance:</b> {hero.biography.firstAppearance}
          </li>
          <li
            className="list-group-item"
          >
            <b>Publisher:</b> {hero.biography.publisher}
          </li>
          <li
            className="list-group-item"
          >
            <b>Alignment:</b> {hero.biography.alignment}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{hero.biography.aliases.join(", ")}</p>

        <button
          type="button"
          className="btn btn-outline-info"
          onClick={handleReturn}
        >
          Return
        </button>

      </div>
    </div>
  );
};
