import { AsyncStorage } from 'react-native';

export const setItem = (key, value = {}) => {
  const fullKey = `@ShoppingList:${key}`;
  const fullValue = JSON.stringify(value);
  AsyncStorage.setItem(fullKey, fullValue);
};

export const getItem = async (key) => {
  const fullKey = `@ShoppingList:${key}`;
  return AsyncStorage.getItem(fullKey);
};
