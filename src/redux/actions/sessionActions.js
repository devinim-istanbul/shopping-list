import firebase from 'firebase';
import * as LocalStorageService from '../../services/localStorageService';
import { SESSION } from '../types';

const {
  SET_USER_TO_SESSION,
  UPDATE_USER_ON_SESSION,

  SET_HOUSE_TO_SESSION,
  DELETE_HOUSE_FROM_SESSION,

  INITIALIZE,
  EMPTY_SESSION

} = SESSION;

const setUserToSessionAction = user => ({ type: SET_USER_TO_SESSION, payload: user });
const updateUserOnSessionAction = user => ({ type: UPDATE_USER_ON_SESSION, payload: user });

const setHouseToSessionAction = house => ({ type: SET_HOUSE_TO_SESSION, payload: house });
const deleteHouseFromSessionAction = () => ({ type: DELETE_HOUSE_FROM_SESSION });

const initializeAction = ({ user, house }) => ({ type: INITIALIZE, payload: { user, house } });
const emptySession = () => ({ type: EMPTY_SESSION });

export const signUp = (email, password) => async dispatch => {
  try {
    const { uid, refreshToken, displayName, phoneNumber, photoURL } = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    const user = { uid, refreshToken, displayName, phoneNumber, photoURL, email };

    const userRef = firebase
      .database()
      .ref(`/users`);

    await userRef.child(uid).set(user);

    dispatch(setUserToSessionAction(user));

  } catch (error) {
    console.log(error.code, error.message);
  }
};

export const signIn = (email, password) => async dispatch => {
  try {
    const auth = await firebase
      .auth()
      .signInAndRetrieveDataWithEmailAndPassword(email, password);

    const userRef = await firebase
      .database()
      .ref(`/users/${auth.user.uid}`)
      .once('value');

    const user = { ...userRef.val() };

    dispatch(setUserToSessionAction(user));

    if(user.houseId) {
      dispatch(setHouseToSessionAction(getHouseById(user.houseId)));
    }

  } catch (error) {
    console.log(error.code, error.message);
  }
};

export const updateUser = user => async (dispatch, getState) => {
  try {
    const { displayName, photoURL } = user;

    if(displayName || photoURL) {
      await firebase
        .auth()
        .currentUser.updateProfile({ displayName, photoURL });
    }

    const { sessionStore } = getState();
    const newUser = { ...sessionStore.user, ...user };

    const userRef = firebase
      .database()
      .ref(`/users`);

    await userRef.child(sessionStore.user.uid).set(newUser);

    dispatch(updateUserOnSessionAction(newUser));

  } catch (error) {
    console.log(error.code, error.message);
  }
};

export const signOut = () => async dispatch => {
  try {
    await firebase
      .auth()
      .signOut();

    dispatch(emptySession());

  } catch (error) {
    console.log(error.code, error.message);
  }
};

export const createHouse = houseName => async dispatch => {
  const houseRef = firebase
    .database()
    .ref(`/houses`);

  const houseId = houseRef.push().getKey();

  const house = {
    info: {
      id: houseId,
      name: houseName,
      createdAt: firebase.database.ServerValue.TIMESTAMP
    }
  };

  await houseRef.child(houseId).set(house);

  updateUser({ houseId });
  dispatch(setHouseToSessionAction(house.info));
};

const getHouseById = async houseId => {
  const houseRef = await firebase
    .database()
    .ref(`/houses/${houseId}/info`)
    .once('value');

  return houseRef.val();
};

export const joinHouse = houseName => async dispatch => {
  const houseRef = await firebase
    .database()
    .ref('/houses')
    .orderByChild('info/name').equalTo(houseName)
    .once('value');

  // TODO: We should handle the case where given house does not exist in db
  if(!houseRef.val())
    return;

  const house = houseRef.val()[Object.keys(houseRef.val())[0]];

  updateUser({ houseId: house.info.id });
  dispatch(setHouseToSessionAction(house.info));

};

export const leaveHouse = () => async (
  dispatch,
  getStore
) => {
  const { sessionStore } = getStore();
  const { user } = sessionStore;

  const newUser = { ...user };
  delete newUser.houseId;

  updateUser(newUser);
  dispatch(deleteHouseFromSessionAction());
};

export const initialize = () => async (dispatch, getState) => {
  const state = await getStateFromLocalStorage(getState());
  dispatch(initializeAction(state));
};

const getStateFromLocalStorage = async () => {
  const user = JSON.parse(await LocalStorageService.getItem('user'));
  const house = JSON.parse(await LocalStorageService.getItem('house'));
  return { user, house };
};
