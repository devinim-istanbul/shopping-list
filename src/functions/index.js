const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp();

exports.addEvent = functions.https.onRequest(req => {
  const { house, event } = req.query;
  return admin
    .database()
    .ref(`/houses/${house.name}/shoppingList/events`)
    .push({ event });
});

exports.createSnapshot = functions.database
  .ref('/houses/{houseName}/shoppingList/events')
  .onCreate((eventSnapShot, context) => {
    const { houseName } = context.params;
    const event = eventSnapShot.val();
    return admin
      .database()
      .ref(`/houses/${houseName}/shoppingList`)
      .push({ snapshot: event.payload });
  });
