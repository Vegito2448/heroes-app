
export interface AuthState {
  logged?: boolean;
  name?: string;
}

export type AuthAction =
  | { type: 'logout'; }
  | { type: 'login', payload?: AuthState; };

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'login':
      return {
        ...action.payload,
        logged: true,
      };
    case 'logout': return {
      logged: false,
      name: '',
    };
    default:
      return state;
  }
};