import { Link, NavLink } from 'react-router-dom';
import { routesConfig } from "../../routers";


export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-2">

      <Link
        className="navbar-brand"
        to="/"
      >
        Heroes App
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          {
            routesConfig.map(({ path, title }) => title && (
              <NavLink
                key={path + title}
                className="nav-item nav-link text-nowrap"
                to={`/${path}`}
              >
                {title}
              </NavLink>
            ))
          }
        </div>
      </div>

      <div className="navbar-collapse  w-100 order-3 dual-collapse2 justify-content-end">
        <ul className="navbar-nav ml-auto">
          <NavLink
            className="nav-item nav-link"
            to="/login"
          >
            Logout
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};