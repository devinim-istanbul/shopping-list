const functions = require('firebase-functions');
const admin = require('firebase-admin');

const addItem = (snapshot, item) => {
  snapshot.push(item);
  return snapshot;
};

const removeItem = (snapshot, item) => {
  return snapshot.filter(itemOfSnapshot => item.id !== itemOfList.id);
};

const editItem = (snapshot, item) => {
  return snapshot.map(itemOfList => (item.id === itemOfList.id ? item : itemOfList));
};

// We can create an abstraction for this
const play = (snapshot, event) => {
  switch (event.type) {
    case 'ADD_ITEM':
      return addItem(snapshot, event.payload);
    case 'EDIT_ITEM':
      return editItem(snapshot, event.payload);
    case 'REMOVE_ITEM':
      return removeItem(snapshot, event.payload);
    default:
      return;
  }
};

exports.snapshotWriter = functions
  .ref(`/houses/${house.name}/shoppingListEvents`)
  .onWrite((change, context) => {
    // getAllEvents
    const shoppingListEvents = change.after.ref.parent;
    const shoppingListSnapshot = shoppingListEvents.parent.child('shoppingListSnapshot');
    // getTriggerEvent somehow
    const event = { type: 'DUMMY_EVENT', payload: { timestamp: 000000 } }

    // new snapshot is created
    return shoppingListSnapshot.transaction((currentSnapshot) => {
      return play(currentSnapshot, event);
    }).then(() => {
      return console.log('Snapshot updated.');
    });
    // replayAllEvents
    // replaceSnapshot

    // TODO
    // Snapshot should be created in every event, however,
    // it should only be sent to clients if the client
    // either was unresponsive for X minutes or has just
    // joined the list



    // should get snapshot or events (depending on if snapshot exists)
    // should create snapshot if it is needed (condition will be decided later)
    // save it to shoppingList if a new snapshot is needed
    // save event under shoppingList if a new snapshot is not needed

    // change.before.val() returns previous iteration of events
  })
