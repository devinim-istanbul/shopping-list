import firebase from 'firebase';

export const loadShoppinglistEventsFromFirestore = () => (
  dispatch,
  getStore
) => {
  const { sessionStore } = getStore();
  const { house } = sessionStore;

  firebase
    .database()
    .ref(`/houses/${house.name}/shoppingList/events`)
    .on('child_added', snapshot => {
      dispatch(snapshot.val());
    });
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
  const newEvent = { ...event, payload: { ...event.payload, id: key } };
  ref.child(key).set(newEvent);
};
