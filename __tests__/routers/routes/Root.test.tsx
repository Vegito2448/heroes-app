import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { Root } from "../../../src/routers";

describe('Root component', () => {
  it('should render without crashing', () => {
    render(
      <MemoryRouter>
        <Root />
      </MemoryRouter>
    );

    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();

    const container = screen.getByRole('main');
    expect(container).toBeInTheDocument();
  });
});