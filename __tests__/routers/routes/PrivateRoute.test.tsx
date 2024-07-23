import { render } from "@testing-library/react";
import { createMemoryRouter, MemoryRouter } from 'react-router-dom';
import { AuthContext } from "../../../src/auth";
import { PrivateRoute } from "../../../src/routers";
import { render as customRender, screen, waitFor } from "../../utils";

describe('PrivateRoute', () => {

  const router = createMemoryRouter([
    {
      path: '/',
      element: <PrivateRoute children={<span>dashboard</span>} />,
    },
    {
      path: '/login',
      element: <span>login</span>,
    }
  ], {
    initialEntries: ['/'],
    initialIndex: 0
  });

  beforeEach(() => {

    vi.clearAllMocks();
    localStorage.clear();

  });

  Storage.prototype.setItem = vi.fn();


  test('should show component login first time', async () => {
    customRender(router);

    const login = screen.getByText('login');

    await waitFor(() => {
      expect(login).toBeInTheDocument();
      expect(login).toMatchSnapshot();
      expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');
    });

  });

  test('should show component dashboard if user is logged', async () => {

    render(
      <MemoryRouter initialEntries={['/']}>
        <AuthContext.Provider value={
          {
            user: {
              logged: true
            },
            dispatch: vi.fn()
          }
        }>
          <PrivateRoute children={<span>dashboard</span>} />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    screen.debug();

    const dashboard = screen.getByText('dashboard');

    await waitFor(() => {
      expect(dashboard).toBeInTheDocument();
      expect(dashboard).toMatchSnapshot();
    });

  });

});