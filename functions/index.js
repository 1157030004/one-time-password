const admin = require("firebase-admin");
const functions = require("firebase-functions");
const serviceAccount = require("./service_account.json");
const createuser = require("./create_user");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

exports.createuser = functions.https.onRequest(createuser);
