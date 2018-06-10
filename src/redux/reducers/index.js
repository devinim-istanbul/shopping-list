import { combineReducers } from 'redux';

import sessionReducer from './sessionReducer';
import shoppingListReducer from './shoppingListReducer';

export default combineReducers({
  sessionStore: sessionReducer,
  shoppingListStore: shoppingListReducer,
});
