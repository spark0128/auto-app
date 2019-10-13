import { ADD_TODO } from '../actions/ActionTypes';

const InitialState = {
  todos: [],
}

export function TodoReducer(state = InitialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload.text],
      };
    default:
      return state
  }
}

