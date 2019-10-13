import { combineReducers } from 'redux';
import { TodoReducer } from './TodoReducer';
import { SellYourCarReducer } from './SellYourCarReducer';

export default combineReducers({
  TodoReducer,
  SellYourCarReducer,
})
