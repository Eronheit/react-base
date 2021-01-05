import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  signInRequest: ['params'],
  signInSuccess: ['token'],

  signOutRequest: null,
  signOutSuccess: null,
});

export const AuthTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  signedIn: !!localStorage.getItem('@reactBase:token'),
  token: localStorage.getItem('@reactBase:token') || null,
  permissions: [],
});

export const signInSuccess = (state, { token }) =>
  state.merge({
    signedIn: true,
    token,
  });

export const signOutSuccess = (state) =>
  state.merge({
    signedIn: false,
    token: null,
  });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SIGN_OUT_SUCCESS]: signOutSuccess,
});
