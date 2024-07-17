import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth";

export const Login = () => {

  const { dispatch } = useContext(AuthContext);

  const lastPath = localStorage.getItem('lastPath') || '/';
  const handleClick = () => {


    dispatch({
      type: "login",
      payload: {
        name: "Peña"
      }
    });

    return {
      name: "Peña"
    };
  }

  return (
    <div
      className="container mt-5"
    >
      <h1>Login</h1>
      <hr />
      <Link
        className="btn btn-primary"
        to={lastPath}
        replace
        onClick={handleClick}
      >
        Login
      </Link>


    </div>
  );
};
