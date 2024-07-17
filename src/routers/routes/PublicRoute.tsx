import { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth";

interface PublicRouteProps {
  children: JSX.Element;
}

export const PublicRoute = ({ children }: PublicRouteProps) => {

  const navigate = useNavigate();

  const { user: { logged } } = useContext(AuthContext);

  const lastPath = localStorage.getItem('lastPath') || '/';

  useEffect(() => {

    if (logged) {
      navigate(lastPath, { replace: true });
    }

  }, [lastPath, logged, navigate]);

  return children;
};
