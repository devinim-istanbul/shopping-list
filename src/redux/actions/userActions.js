import firebase from 'firebase';
import { AsyncStorage } from 'react-native';

import { saveUserToStorage } from './storageActions';

import { USER, INITIALIZE } from '../types';

const { SIGN_UP, SIGN_IN, SIGN_OUT, UPDATE_USER } = USER;

export const signUp = (email, password) => async dispatch => {
  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    const {
      uid,
      displayName,
      refreshToken,
      phoneNumber,
      photoURL
    } = response;

    const action = {
      type: SIGN_UP,
      payload: {
        userId: uid,
        token: refreshToken,
        name: displayName,
        email,
        phoneNumber,
        photoURL
      }
    };

    await saveUserToStorage(action);
    dispatch(action);
  } catch (error) {
    console.log(error.code, error.message);
  }
};

export const signIn = (email, password) => async dispatch => {
  try {
    const response = await firebase
      .auth()
      .signInAndRetrieveDataWithEmailAndPassword(email, password)
    const {
      uid,
      displayName,
      refreshToken,
      phoneNumber,
      photoURL
    } = response.user;

    const action = {
      type: SIGN_IN,
      payload: {
        userId: uid,
        token: refreshToken,
        name: displayName,
        email,
        phoneNumber,
        photoURL
      }
    };

    await saveUserToStorage(action);
    dispatch(action);
  } catch (error) {
    console.log(error.code, error.message);
  }

};

export const updateUser = fields => async dispatch => {
  try {
    await firebase
      .auth()
      .currentUser.updateProfile({ ...fields });

      const action = {
        type: UPDATE_USER,
        payload: {
          name: fields.displayName,
          photoURL: fields.photoURL
        }
      };

      await saveUserToStorage(action);
      dispatch(action);
  } catch (error) {
    console.log(error.code, error.message);
  }

};

export const signOut = () => async dispatch => {
  const action = { type: SIGN_OUT, payload: {} };

  try {
    await firebase
      .auth()
      .signOut();

    await saveUserToStorage(action);
    dispatch(action);
  } catch (error) {
    console.log(error.code, error.message);
  }

};

export const initialize = () => async (dispatch, getState) => {
  let user = await getUserFromLocalStorage();
  user = user || getUserFromStore(getState()) || {};
  if (user) dispatch({ type: INITIALIZE, payload: user });
};

const getUserFromStore = ({ userStore }) => userStore.user;

const getUserFromLocalStorage = async () => {
  let user;

  try {
    user = await AsyncStorage.getItem('@ShoppingList:user');
  } catch (error) {
    console.log(error)
  }

  return JSON.parse(user);
};
