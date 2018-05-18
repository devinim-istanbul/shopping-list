const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp();

/**
 * Not used for now
 * @type {HttpsFunction}
 */
exports.createSnapshot = functions.https.onRequest(req => {
  const { house, snapshot } = req.query;
  return admin
    .database()
    .ref(`/houses/${house.name}/shoppingList`)
    .push({ snapshot });
});
