import { combineReducers } from 'redux';

import sessionReducer from './sessionReducer';
import shoppingListReducer from './shoppingListReducer';
import userReducer from './userReducer';

export default combineReducers({
  sessionStore: sessionReducer,
  shoppingListStore: shoppingListReducer,
  userStore: userReducer,
});
