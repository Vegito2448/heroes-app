import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/components";

describe('NavBar tests', () => {

  const dispatch = vi.fn();

  beforeEach(() => {
    userEvent.setup();
    render(
      <AuthContext.Provider
        value={{
          user: {
            name: 'test'
          },
          dispatch
        }}
      >
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
  });

  test('should render NavBar', () => {

    const home = screen.getByRole('link', { name: /heroes app/i });

    expect(home).toBeInTheDocument();

  });

  test('should render NavBar and call logout', async () => {

    const logout = screen.getByRole('link', { name: /logout/i });

    expect(logout).toBeInTheDocument();

    await userEvent.click(logout);

    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith({ type: 'logout' });

  });

  test('should render NavBar and call logout and redirect to login', async () => {

    const logout = screen.getByRole('link', { name: /logout/i });

    expect(logout).toBeInTheDocument();

    await userEvent.click(logout);

    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith({ type: 'logout' });

  });

});