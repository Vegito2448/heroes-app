import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from "../../src/auth";

type CustomRenderOptions = Omit<RenderOptions, 'wrapper'>;

const customRender = (
  router: ReturnType<typeof createMemoryRouter>,
  options?: CustomRenderOptions,
): RenderResult => render(
  <RouterProvider router={router} />
  , { wrapper: AuthProvider, ...options });

export * from '@testing-library/react';
export { customRender as render };

