import { authReducer } from "../../src/auth";

describe('authReducer', () => {

  test('should return default state', () => {
    const state = authReducer({}, { type: 'login', });

    expect(state).toEqual({ logged: true });
  });

  test('should auth user and set name', () => {
    const state = authReducer({}, { type: 'login', payload: { name: 'Peña', } });

    expect(state).toEqual({ name: 'Peña', logged: true });
  });

  test('should logout user', () => {
    const state = authReducer({}, { type: 'logout', });

    expect(state).toEqual({ logged: false, name: '' });
  });

});