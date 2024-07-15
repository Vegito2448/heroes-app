import queryString from "query-string";
import { FormEvent } from "react";
import { Form, useLoaderData, useLocation, useSearchParams } from "react-router-dom";
import { HeroCard } from "../../components";
import { useForm } from "../../hooks/useForm";
import { Hero } from "../../interfaces";

export const SearchScreen = () => {

  const data = useLoaderData() as { heroes: Hero[] | Error; };

  const { search } = useLocation();

  const { q = '' } = queryString.parse(search);

  const [, setSearchParams] = useSearchParams();

  const { searchText, handleChange } = useForm({
    initialState: {
      searchText: q as string
    }
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: searchText });
  };

  const heroes = data?.heroes;

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div
          className="col-sm-12 col-md-4 col-lg-6"
        >
          <h4>Search Form</h4>
          <hr />
          <Form
            method="GET"
            action="/search"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="searchText"
              id="searchText"
              value={searchText}
              onChange={handleChange}
              placeholder="Find your hero"
              className="form-control"
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
              disabled={!searchText}
            >
              Search...
            </button>
          </Form>
        </div>

        <div className="col-12 col-lg-6 col-md-8 col-sm-12">
          <h4>Results</h4>
          <hr />

          {
            !heroes && <div
              className="alert alert-info"
            >
              Search a hero
            </div>
          }
          <div className="row">
            {
              Array.isArray(heroes) && heroes.length ? heroes.map((hero: Hero) => (
                <HeroCard hero={hero} key={hero.id} />
              )) : heroes !== undefined &&
              <div
                className="alert alert-danger"
              >
                {heroes instanceof Error && heroes?.message || 'No heroes found'}
              </div>
            }
          </div>




        </div>

      </div>

    </div>
  );
};
