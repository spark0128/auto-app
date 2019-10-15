import { SAVE_USER } from './ActionTypes';

export function saveUser(user) {
  return {
    type: SAVE_USER,
    payload: { user },
  }
}
