var admin = require("firebase-admin");
const config = require("./config");

var serviceAccount = require("../../todoapp-a550d-firebase-adminsdk-mv4sc-ac21b9a522.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `${config.databaseURL}`,
  storageBucket: `${config.storageBucket}`,
});

const db = admin.firestore();

module.exports = { admin, db };
