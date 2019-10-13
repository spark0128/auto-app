import { SAVE_PHOTOS } from './ActionTypes';

export function savePhotos(photos) {
  return {
    type: SAVE_PHOTOS,
    payload: { photos },
  }
}

