import firebase from 'firebase';
import { SHOPPING_LIST } from '../types';


/*
 * TODO: Will be replaced after user implementation is completed
 * @type {{id: number, name: string, avatar: string}}
 */
const TEST_USER = {
  id: 1,
  name: 'Berkan Yavri',
  avatar: 'https://scontent.fist1-1.fna.fbcdn.net/v/t1.0-9/971421_546359168791570_1878470308_n.jpg?_nc_cat=0&oh=946ffe5d88c72eb43112349375e56da7&oe=5B7A591D'
};

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
    .ref(`/houses/${house.name}/shoppingList/events`)
    .orderByChild("timestamp").startAt(timestamp)
    .on('child_added', eventSnapshot => {
      dispatch(eventSnapshot.val());
    });
};

const getShoppingListFBSnapshot = async (house) => {
  const snapshot = await firebase
    .database()
    .ref(`/houses/${house.name}/shoppingList/snapshot`)
    .once('value');

  return snapshot.val();
};


export const pushShoppinglistEventToFirestore = (event) => (
  dispatch,
  getStore
) => {
  const { sessionStore } = getStore();
  const { house } = sessionStore;

  const ref = firebase
    .database()
    .ref(`/houses/${house.name}/shoppingList/events`);

  const key = ref.push().getKey();

  const newEvent = {
    ...event,
    payload: {
      ...event.payload,
      TEST_USER
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
    .ref(`/houses/${house.name}/shoppingList/snapshot`)
    .set({ timestamp: firebase.database.ServerValue.TIMESTAMP, shoppingList });
};
