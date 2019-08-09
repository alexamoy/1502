import { combineReducers } from 'redux';

import users from './users';
import items from './shoppingList';

const rootReducer = combineReducers({
  users,
  items
});

export default rootReducer;
