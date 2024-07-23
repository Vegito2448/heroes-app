import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { allRoutes } from "../../../src/routers";

describe('Search Screen Component Test', () => {// Test for rendering the component

  const heroToSearch = 'batman';

  const paramWithHero = `?q=${heroToSearch}`;

  let router: ReturnType<typeof createMemoryRouter>;

  beforeEach(() => {
    router = createMemoryRouter(allRoutes, {
      initialEntries: ['/search'],
      initialIndex: 0
    });

    userEvent.setup();

    render(
      <AuthContext.Provider
        value={{
          user: {
            name: 'test',
            logged: true
          },
          dispatch: vi.fn()
        }}
      >
        <RouterProvider router={router} />
      </AuthContext.Provider>
    );
  });

  test('should render without crashing', async () => {

    const search = await screen.findByRole('heading', { name: /search screen/i });

    expect(search).toBeInTheDocument();

  });

  // Test for search form interaction
  test('should update URL parameters on form submit', async () => {

    const searchInput = await screen.findByRole('textbox');

    const searchButton = await screen.findByRole('button', { name: /Search.../i });

    expect(searchButton).toBeDisabled();

    await userEvent.type(searchInput, heroToSearch);

    expect(searchInput).toHaveValue(heroToSearch);

    expect(searchButton).toBeEnabled();

    await userEvent.click(searchButton);

    expect(router.state.navigation.location?.search).toBe(paramWithHero);

    const batmanCard = await screen.findByRole('heading', { name: /terry mcginnis/i });

    expect(batmanCard).toBeInTheDocument();

  });



  // Test for displaying "Search a hero" message
  test('should display "Search a hero" message when no search has been made', async () => {

    screen.debug();

    const searchInput = await screen.findByRole('textbox');

    const searchButton = await screen.findByRole('button', { name: /Search.../i });

    const notValue = 'not a hero';

    await userEvent.type(searchInput, notValue);

    expect(searchInput).toHaveValue(notValue);

    await userEvent.click(searchButton);

    const notHeroMessage = await screen.findByText(/No heroes found/i);

    expect(notHeroMessage).toBeInTheDocument();

  });

});