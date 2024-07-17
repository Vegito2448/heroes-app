import { createContext, Dispatch, ReactNode, useEffect, useReducer } from "react";
import { AuthAction, authReducer, AuthState } from "./authReducer";

interface AuthContextProps {
  user: AuthState;
  dispatch: Dispatch<AuthAction>;
}

const initialState: AuthState = {
  logged: false,
  name: ''
};

const init = () => JSON.parse(localStorage.getItem('user') as string) || initialState;


const AuthContext = createContext<AuthContextProps>({
  user: {
    logged: false
  },
  dispatch: () => { }
});

const AuthProvider = ({ children }: {
  children: ReactNode;
}) => {

  const [user, dispatch] = useReducer(authReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

