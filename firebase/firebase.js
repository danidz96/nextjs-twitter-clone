/* eslint-disable no-async-promise-executor */
import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_MESSAGING_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
const db = firebase.firestore();

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user;

  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;

    onChange(normalizedUser);
  });
};

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return auth.signInWithPopup(githubProvider);
};

export const addDevit = ({ avatar, content, userId, userName }) => {
  return db.collection('devits').add({
    avatar,
    content,
    userId,
    userName,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  });
};

export const fetchLatestDevits = () => {
  return db
    .collection('devits')
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        const data = doc.data();
        const { id } = doc;
        const { createdAt } = data;
        const date = new Date(createdAt.seconds * 1000);
        const normalizedCreatedAt = new Intl.DateTimeFormat('es-ES').format(date);
        return {
          ...data,
          id,
          createdAt: normalizedCreatedAt,
        };
      });
    });
};
