import { SAVE_PHOTOS } from '../actions/ActionTypes';

const InitialState = {
  photos: [],
}

export function SellYourCarReducer(state = InitialState, action) {
  switch (action.type) {
    case SAVE_PHOTOS:
      return {
        photos: action.payload.photos,
      };
    default:
      return state
  }
}

