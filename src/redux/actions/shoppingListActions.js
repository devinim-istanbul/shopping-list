import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';

import { SHOPPING_LIST } from '../types';

export const loadShoppinglistEventsFromFirestore = () => (
  dispatch,
  getStore
) => {
  const { sessionStore } = getStore();
  const { house } = sessionStore;
  if (!house) {
    NavigationActions.navigate({ routeName: 'House' });
  } else {
    firebase
      .database()
      .ref(`/houses/${house.name}/shoppingListEvents`)
      .on('value', snapshot => {
        dispatch(generateShoppingList(snapshot.val()));
      });
  }
};

export const generateShoppingList = shoppingListActions => {
  const shoppingList = shoppingListActions.reduce((list, action) => {
    if (!action.type) return list;
    switch (action.type) {
      case 'ADD_ITEM':
        return addItem(list, action.payload);
      case 'REMOVE_ITEM':
        return removeItem(list, action.payload);
      case 'EDIT_ITEM':
        return editItem(list, action.payload);
      default:
        return list;
    }
  }, []);

  return {
    type: SHOPPING_LIST.SET_LIST,
    payload: shoppingList
  };
};

const addItem = (list, item) => {
  list.push(item);
  return list;
};

const removeItem = (list, item) =>
  list.filter(itemOfList => item.id !== itemOfList.id);

const editItem = (list, item) =>
  list.map(itemOfList => (item.id === itemOfList.id ? item : itemOfList));
