import { combineReducers } from 'redux';
import users from './users';
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
  users,
   
});
export default rootReducer;