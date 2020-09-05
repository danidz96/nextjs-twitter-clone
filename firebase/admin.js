const admin = require('firebase-admin');

const serviceAccount = require('./firebase-keys.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://devter-6661a.firebaseio.com',
  });
}

export const firestore = admin.firestore();
