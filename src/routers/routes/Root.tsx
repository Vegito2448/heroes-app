import { Outlet } from "react-router-dom";
import { Navbar } from '../../components';

export const Root = () => {
  return (
    <>
      <Navbar />
      <main
        className="container container-fluid mt-2 mx-auto "
      >
        <Outlet />
      </main>
    </>
  );
};
