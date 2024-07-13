import { Link } from "react-router-dom";

export const Login = () => {

  return (
    <div
      className="container mt-5"
    >
      <h1>Login</h1>
      <hr />
      <Link
        className="btn btn-primary"
        to={'/'}
        replace
      >
        Login
      </Link>


    </div>
  );
};
