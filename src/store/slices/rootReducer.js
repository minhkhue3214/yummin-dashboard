import { combineReducers } from 'redux';
import { default as users } from './users';
export * from './users';


const rootReducer = combineReducers({
  users,
});

export default rootReducer;
