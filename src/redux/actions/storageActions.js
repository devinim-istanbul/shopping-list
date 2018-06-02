import { AsyncStorage } from 'react-native';
import { USER } from '../types';

const { SIGN_IN, SIGN_OUT, SIGN_UP, UPDATE_USER } = USER;

export const saveUserToStorage = async ({ type, payload }) => {
  let user;
  switch (type) {
    case SIGN_UP:
      await setUserToStore(payload);
      return;
    case SIGN_IN:
      await setUserToStore(payload);
      return;
    case SIGN_OUT:
      await setUserToStore({});
      return;
    case UPDATE_USER:
      user = await getUserFromStore();
      await setUserToStore({ ...JSON.parse(user), ...payload });
      
    default:
      
  }
}

const getUserFromStore = async () =>
  await AsyncStorage.getItem('@ShoppingList:user');

const setUserToStore = async (payload) =>
  await AsyncStorage.setItem('@ShoppingList:user', JSON.stringify(payload));
