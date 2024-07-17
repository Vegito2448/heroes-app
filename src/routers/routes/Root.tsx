import { Outlet, useLocation } from "react-router-dom";
import { Navbar, WelcomePage } from '../../components';

export const Root = () => {

  const { pathname } = useLocation();

  return (
    <>
      <Navbar />

      <div
        className="container container-fluid mt-2 mx-auto "
      >
        {
          pathname === '/' ? (
            WelcomePage()
          ) : <Outlet />
        }

      </div>
    </>
  );
};
