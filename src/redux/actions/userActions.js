import firebase from 'firebase';

import { USER } from '../types';

const { SIGN_UP, SIGN_IN, SIGN_OUT, UPDATE_USER } = USER;

export const signUp = (email, password) => async dispatch => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(response => {
      const {
        uid,
        displayName,
        refreshToken,
        phoneNumber,
        photoURL
      } = response;

      dispatch({
        type: SIGN_UP,
        payload: {
          userId: uid,
          token: refreshToken,
          name: displayName,
          email,
          phoneNumber,
          photoURL
        }
      });
    })
    .catch(error => {
      console.log(error.code, error.message);
    });
};

export const signIn = (email, password) => async dispatch => {
  firebase
    .auth()
    .signInAndRetrieveDataWithEmailAndPassword(email, password)
    .then(response => {
      const {
        uid,
        displayName,
        refreshToken,
        phoneNumber,
        photoURL
      } = response.user;

      dispatch({
        type: SIGN_IN,
        payload: {
          userId: uid,
          token: refreshToken,
          name: displayName,
          email,
          phoneNumber,
          photoURL
        }
      });
    })
    .catch(error => {
      console.log(error.code, error.message);
    });
};

export const updateUser = fields => async dispatch => {
  firebase
    .auth()
    .currentUser.updateProfile({
      ...fields
    })
    .then(() => {
      dispatch({
        type: UPDATE_USER,
        payload: { ...fields }
      });
    })
    .catch(error => console.log(error.code, error.message));
};

export const signOut = () => async dispatch => {
  firebase
    .auth()
    .signOut()
    .then(() => dispatch({ type: SIGN_OUT }))
    .catch(error => console.log(error.code, error.message));
};
