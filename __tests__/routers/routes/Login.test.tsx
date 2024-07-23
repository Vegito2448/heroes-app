import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { AuthContext } from "../../../src/auth";
import { Login } from "../../../src/routers";


describe('Login Component', () => {
  const dispatchMock = vi.fn();
  beforeEach(() => {
    userEvent.setup();
    render(
      <MemoryRouter>
        <AuthContext.Provider
          value={{
            user: {
              name: '',
              logged: false
            },
            dispatch: dispatchMock
          }}
        >
          <Login />
        </AuthContext.Provider>
      </MemoryRouter>
      ,);
    window.localStorage.clear();
  });

  it('should render correctly', () => {
    const login = screen.getByRole('heading', { name: /login/i });

    expect(login).toBeInTheDocument();
  });

  it('should call dispatch with correct arguments when login button is clicked', async () => {

    const loginButton = screen.getByRole('link', { name: /login/i });

    await userEvent.click(loginButton);

    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'login',
      payload: {
        name: 'Peña'
      }
    });

    expect(loginButton.getAttribute('href')).toBe('/');
  });

});