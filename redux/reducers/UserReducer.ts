import { SAVE_USER } from '../actions/ActionTypes';

const InitialState = {
  user: null,
}

export function UserReducer(state = InitialState, action) {
  switch (action.type) {
    case SAVE_USER:
      return {
        user: action.payload.user,
      };
    default:
      return state
  }
}

