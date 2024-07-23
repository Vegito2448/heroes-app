import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth";

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {

  const { user: { logged } } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    localStorage.setItem('lastPath', location.pathname);

    if (!logged) {
      console.log('no logeado');
      navigate('/login', { replace: true });
    }

  }, [location.pathname, logged, navigate]);

  return children;
};
