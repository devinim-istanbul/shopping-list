import firebase from 'firebase';
import { SHOPPING_LIST } from '../types';

export const loadShoppinglistEventsFromFirestore = () => async (
  dispatch,
  getStore
) => {
  const { sessionStore } = getStore();
  const { house } = sessionStore;

  const snapshot = await getShoppingListFBSnapshot(house);

  if (snapshot) {
    dispatch({
      type: SHOPPING_LIST.SET_LIST,
      payload: snapshot.shoppingList
    });
  }

  const timestamp = snapshot ? snapshot.timestamp : 0;

  firebase
    .database()
    .ref(`/houses/${house.id}/shoppingList/events`)
    .orderByChild('timestamp').startAt(timestamp)
    .on('child_added', eventSnapshot => {
      dispatch(eventSnapshot.val());
    });
};

const getShoppingListFBSnapshot = async (house) => {
  const snapshot = await firebase
    .database()
    .ref(`/houses/${house.id}/shoppingList/snapshot`)
    .once('value');

  return snapshot.val();
};


export const pushShoppinglistEventToFirestore = event => (
  dispatch,
  getStore
) => {
  const { sessionStore } = getStore();
  const { house, user } = sessionStore;

  const ref = firebase
    .database()
    .ref(`/houses/${house.id}/shoppingList/events`);

  const key = ref.push().getKey();

  const newEvent = {
    ...event,
    payload: {
      ...event.payload,
      user: {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL
      }
    }
  };

  newEvent.payload.id = event.payload.id || key;
  newEvent.payload.timestamp = firebase.database.ServerValue.TIMESTAMP;
  newEvent.timestamp = firebase.database.ServerValue.TIMESTAMP;

  ref.child(key).set(newEvent);
};

export const generateSnaphostInFirestore = () => async (
  dispatch,
  getStore
) => {
  const {
    shoppingListStore: { shoppingList },
    sessionStore: { house }
  } = getStore();

  firebase
    .database()
    .ref(`/houses/${house.id}/shoppingList/snapshot`)
    .set({ timestamp: firebase.database.ServerValue.TIMESTAMP, shoppingList });
};
