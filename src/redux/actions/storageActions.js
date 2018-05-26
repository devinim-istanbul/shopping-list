import { AsyncStorage } from 'react-native';
import { USER } from '../types';

const { SIGN_IN, SIGN_OUT, SIGN_UP, UPDATE_USER } = USER;

export const saveUserToStorage = async ({ type, payload }) => {
  let user;
  switch (type) {
    case SIGN_UP:
      await setUserToStore(payload);
      break;
    case SIGN_IN:
      await setUserToStore(payload);
      break;
    case SIGN_OUT:
      await setUserToStore({});
      break;
    case UPDATE_USER:
      user = await getUserFromStore();
      await setUserToStore({ ...user, ...payload });
      break;
    default:
      break;
  }
}

const getUserFromStore = async () =>
  await AsyncStorage.getItem('@ShoppingList:user');

const setUserToStore = async (payload) =>
  await AsyncStorage.setItem('@ShoppingList:user', JSON.stringify(payload));
