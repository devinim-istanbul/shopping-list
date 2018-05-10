import { SHOPPING_LIST } from '../types';
import { SHOPPING_INITIAL_STATE } from './initial';

export default (state = SHOPPING_INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOPPING_LIST.SET_LIST:
      return { ...state, shoppingList: action.payload };
    default:
      return state;
  }
};
