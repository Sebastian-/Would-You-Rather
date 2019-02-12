import { SET_AUTHED_USER } from './types';

export function setAuthUser (id) {
  return {
    type: SET_AUTHED_USER,
    id
  };
}