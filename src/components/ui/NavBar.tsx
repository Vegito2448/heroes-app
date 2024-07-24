import { useContext } from "react";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from "../../auth";
import { routesConfig } from "../../routers";


export const Navbar = () => {
  const { user: { name = '' }, dispatch } = useContext(AuthContext);

  const handleClick = () => {
    dispatch({
      type: "logout"
    });

  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-2">

      <Link
        className="navbar-brand"
        to="/heroes-app/"
      >
        Heroes App
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          {
            routesConfig.map(({ path, title }) => title && path && (
              <NavLink
                key={path + title}
                className="nav-item nav-link text-nowrap"
                to={path}
              >
                {title}
              </NavLink>
            ))
          }
        </div>
      </div>

      <div className="navbar-collapse  w-100 order-3 dual-collapse2 justify-content-end">
        <ul className="navbar-nav ml-auto">
          {name &&
            <>
              <span
                className="nav-item nav-link text-info"
              >
                {name}
            </span>
            <NavLink
              className="nav-item nav-link btn"
              to="login"
              replace
              onClick={handleClick}
            >
              Logout
            </NavLink>
            </>
          }
        </ul>
      </div>
    </nav>
  );
};