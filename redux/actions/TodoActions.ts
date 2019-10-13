import { ADD_TODO } from './ActionTypes';

export function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: { text },
  }
}

