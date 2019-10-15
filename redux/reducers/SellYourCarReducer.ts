import { SAVE_PHOTOS, SAVE_BRAND, SAVE_MODEL } from "../actions/ActionTypes";

const InitialState = {
  photos: [],
  brandName: null,
  modelName: null
};

export function SellYourCarReducer(state = InitialState, action) {
  switch (action.type) {
    case SAVE_PHOTOS:
      return {
        ...state,
        photos: action.payload.photos
      };
    case SAVE_BRAND:
      return {
        ...state,
        brandName: action.payload.brandName
      };
    case SAVE_MODEL:
      return {
        ...state,
        modelName: action.payload.modelName
      };
    default:
      return state;
  }
}
