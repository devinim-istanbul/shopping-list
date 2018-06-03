import firebase from 'firebase';
import { AsyncStorage } from 'react-native';

import { SESSION } from '../types';

import { saveHouseToStorage } from './storageActions';

const { SET_HOUSE_TO_SESSION, DELETE_HOUSE_FROM_SESSION, INITIALIZE_HOUSE } = SESSION;

export const createHouse = name => async (
  dispatch,
  getStore
) => {
  const { userStore } = getStore();
  const { user } = userStore;

  const ref = firebase
    .database()
    .ref(`/houses`);

  const key = ref.push().getKey();

  const house = {
    id: key,
    name,
    createdAt: firebase.database.ServerValue.TIMESTAMP,
    members: {
      [user.userId]: user
    }
  }

  ref.child(key).set(house);

  const action = {
    type: SET_HOUSE_TO_SESSION,
    payload: house
  }

  await saveHouseToStorage(action);
  dispatch(action);
};

export const joinHouse = name => async (
  dispatch,
  getStore
) => {
  const { userStore } = getStore();
  const { user } = userStore;

  const houses = await firebase
    .database()
    .ref('/houses')
    .once('value');

  // This requires a better solution
  const houseId = Object.keys(houses.val()).filter(key =>
    houses.val()[key].name === name
  );

  await firebase
    .database()
    .ref(`/houses/${houseId}/members/${user.userId}`)
    .set(user);

  const newHouse = await firebase
    .database()
    .ref(`/houses/${houseId}`)
    .once('value');

  const action = {
    type: SET_HOUSE_TO_SESSION,
    payload: {
      id: newHouse.val().id,
      name: newHouse.val().name,
      createdAt: newHouse.val().createdAt,
      members: newHouse.val().members
    }
  }

  await saveHouseToStorage(action);
  dispatch(action);
};

export const leaveHouse = name => async (
  dispatch,
  getStore
) => {
  const { userStore } = getStore();
  const { user } = userStore;

  firebase
    .database()
    .ref(`/houses/${house.id}/members/${user.id}`)
    .remove();

  const action = {
    type: DELETE_HOUSE_FROM_SESSION,
  }

  await saveHouseToStorage(action);
  dispatch(action);
};

export const initializeHouse = () => async (dispatch, getState) => {
  let house = await getHouseFromLocalStorage();
  house = house || getHouseFromStore(getState()) || {};
  if (house) dispatch({ type: INITIALIZE_HOUSE, payload: house });
};

const getHouseFromStore = ({ sessionStore }) => sessionStore.house;

const getHouseFromLocalStorage = async () => {
  let house;

  try {
    house = await AsyncStorage.getItem('@ShoppingList:house');
  } catch (error) {
    console.log(error)
  }

  return JSON.parse(house);
};
