import { AsyncStorage } from 'react-native';
import { USER, SESSION } from '../types';

const { SIGN_IN, SIGN_OUT, SIGN_UP, UPDATE_USER } = USER;
const { SET_HOUSE_TO_SESSION, DELETE_HOUSE_FROM_SESSION } = SESSION;

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
      await setHouseToStore({});
      break;
    case UPDATE_USER:
      user = await getUserFromStore();
      await setUserToStore({ ...JSON.parse(user), ...payload });
      break;
    default:
      break;
  }
}

export const saveHouseToStorage = async ({ type, payload }) => {
  switch (type) {
    case SET_HOUSE_TO_SESSION:
      await setHouseToStore(payload);
      break;

    case DELETE_HOUSE_FROM_SESSION:
      await setHouseToStore({});
      break;

    default:
      break;
  }
}

const getUserFromStore = async () =>
  await AsyncStorage.getItem('@ShoppingList:user');

const setUserToStore = async (payload) =>
  await AsyncStorage.setItem('@ShoppingList:user', JSON.stringify(payload));

const getHouseFromStore = async () =>
  await AsyncStorage.getItem('@ShoppingList:house');

const setHouseToStore = async (payload) =>
  await AsyncStorage.setItem('@ShoppingList:house', JSON.stringify(payload));
