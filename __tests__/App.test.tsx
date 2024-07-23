import { render, screen, within } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "../src/App";

describe('App', () => {


  beforeEach(() => {
    render(<App />);
    userEvent.setup();
  });

  test("should show component login first time if isn't authenticated", async () => {

    const marvelS = screen.getByRole('link', { name: /marvel heroes/i });

    await userEvent.click(marvelS);

    const login = await screen.findByRole('heading', { name: /login/i });

    expect(login).toBeInTheDocument();

  });

  test("should show component dashboard if user is authenticated", async () => {

    const login = await screen.findByRole('link', { name: /login/i });

    await userEvent.click(login);

    const navigation = await screen.findByRole('navigation');

    within(navigation).getByText(/peña/i);

  });

});