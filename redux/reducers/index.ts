import { combineReducers } from 'redux';
import { TodoReducer } from './TodoReducer';
import { SellYourCarReducer } from './SellYourCarReducer';
import { UserReducer } from './UserReducer';

export default combineReducers({
  TodoReducer,
  SellYourCarReducer,
  UserReducer,
})
