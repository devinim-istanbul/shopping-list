import { SESSION, SHOPPING_LIST } from '../types';
import { SHOPPING_INITIAL_STATE } from './initial';

export default (state = SHOPPING_INITIAL_STATE, action) => {

  switch (action.type) {
    case SHOPPING_LIST.SET_LIST:
      return { ...state, shoppingList: action.payload || [] };
    case SHOPPING_LIST.ADD_ITEM:
      return { ...state, shoppingList: addItem(state.shoppingList, action.payload) };
    case SHOPPING_LIST.EDIT_ITEM:
      return { ...state, shoppingList: editItem(state.shoppingList, action.payload) };
    case SHOPPING_LIST.REMOVE_ITEM:
      return { ...state, shoppingList: removeItem(state.shoppingList, action.payload) };
    case SHOPPING_LIST.INCREMENT_QUANTITY:
      return { ...state, shoppingList: incrementQuantity(state.shoppingList, action.payload) };
    case SHOPPING_LIST.DECREMENT_QUANTITY:
      return { ...state, shoppingList: decrementQuantity(state.shoppingList, action.payload) };
    case SESSION.EMPTY_SESSION:
      return SHOPPING_INITIAL_STATE;
    default:
      return state;
  }
};

const addItem = (list, item) => [ ...list, item ];

const removeItem = (list, item) =>
  list.filter(itemOfList => item.id !== itemOfList.id);

const editItem = (list, item) =>
  list.map(itemOfList => item.id === itemOfList.id ? { ...itemOfList, ...item } : itemOfList);

const incrementQuantity = (list, item) =>
  list.map(itemOfList => item.id === itemOfList.id ?
    { ...itemOfList, quantity: itemOfList.quantity + 1} : itemOfList );

const decrementQuantity = (list, item) =>
  list.map(itemOfList => item.id === itemOfList.id ?
    { ...itemOfList, quantity: itemOfList.quantity - 1} : itemOfList );
