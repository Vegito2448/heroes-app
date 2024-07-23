import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Alignment, Gender, Hero } from "../../../src/interfaces";
import { HeroScreen } from "../../../src/routers";



describe('HeroScreen', () => {
  const { navigate } = vi.hoisted(() => {

    return {
      navigate: vi.fn()
    };
  });
  vi.mock('react-router-dom', async (importOriginal) => {
    const mod = await importOriginal<typeof import('react-router-dom')>();
    return {
      ...mod,
      // replace some exports
      useLoaderData: () => ({
        hero: {
          id: 1,
          name: 'Batman',
          biography: {
            alterEgos: 'Bruce Wayne',
            firstAppearance: 'Detective Comics #27',
            publisher: 'DC Comics',
            alignment: Alignment.Good,
            aliases: ['The Caped Crusader', 'The Dark Knight'],
            fullName: "",
            placeOfBirth: ""
          },
          images: {
            lg: 'batman-lg.jpg',
            xs: "",
            sm: "",
            md: ""
          },
          slug: "",
          powerstats: {
            intelligence: 0,
            strength: 0,
            speed: 0,
            durability: 0,
            power: 0,
            combat: 0
          },
          appearance: {
            gender: Gender.Empty,
            race: null,
            height: [],
            weight: [],
            eyeColor: "",
            hairColor: ""
          },
          work: {
            occupation: "",
            base: ""
          },
          connections: {
            groupAffiliation: "",
            relatives: ""
          }
        }
      }),
      useNavigate: () => navigate,
    };
  });
  const mockHero: Hero = {
    id: 1,
    name: 'Batman',
    biography: {
      alterEgos: 'Bruce Wayne',
      firstAppearance: 'Detective Comics #27',
      publisher: 'DC Comics',
      alignment: Alignment.Good,
      aliases: ['The Caped Crusader', 'The Dark Knight'],
      fullName: "",
      placeOfBirth: ""
    },
    images: {
      lg: 'batman-lg.jpg',
      xs: "",
      sm: "",
      md: ""
    },
    slug: "",
    powerstats: {
      intelligence: 0,
      strength: 0,
      speed: 0,
      durability: 0,
      power: 0,
      combat: 0
    },
    appearance: {
      gender: Gender.Empty,
      race: null,
      height: [],
      weight: [],
      eyeColor: "",
      hairColor: ""
    },
    work: {
      occupation: "",
      base: ""
    },
    connections: {
      groupAffiliation: "",
      relatives: ""
    }
  };

  beforeEach(() => {

    vi.resetAllMocks();
  });



  test('Should show hero info', () => {

    render(
      <MemoryRouter>
        <HeroScreen />
      </MemoryRouter>
    );

    expect(screen.getByText(mockHero.name)).toBeInTheDocument();
    expect(screen.getByText(mockHero.biography.alterEgos)).toBeInTheDocument();
    expect(screen.getByText(mockHero.biography.firstAppearance)).toBeInTheDocument();
    expect(screen.getByText(mockHero.biography.publisher!)).toBeInTheDocument();
    expect(screen.getByText(mockHero.biography.alignment)).toBeInTheDocument();
    expect(screen.getByText(mockHero.biography.aliases.join(", "))).toBeInTheDocument();
  });

  test('Should return the previos screen', () => {
    // do the history has more than 2 entries?

    render(
      <MemoryRouter>
        <HeroScreen />
      </MemoryRouter>
    );

    Object.defineProperty(window.history, 'length', {
      value: 3,
      writable: true,
    });

    act(() => { screen.getByRole('button', { name: /return/i }).click(); });
    expect(navigate).toHaveBeenCalledWith(-1);
  });

  test('should navigate to dashboard if history is <= 2', () => {

    render(
      <MemoryRouter>
        <HeroScreen />
      </MemoryRouter>
    );

    Object.defineProperty(window.history, 'length', {
      value: 2,
      writable: true,
    });

    act(() => { screen.getByRole('button', { name: /return/i }).click(); });

    expect(navigate).toHaveBeenCalledWith('/');
  });

});;