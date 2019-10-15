import { SAVE_PHOTOS, SAVE_BRAND, SAVE_MODEL } from "./ActionTypes";

export function savePhotos(photos) {
  return {
    type: SAVE_PHOTOS,
    payload: { photos }
  };
}

export function saveBrand(brandName) {
  return {
    type: SAVE_BRAND,
    payload: { brandName }
  };
}

export function saveModel(modelName) {
  return {
    type: SAVE_MODEL,
    payload: { modelName }
  };
}
