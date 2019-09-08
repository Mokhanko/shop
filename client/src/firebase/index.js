import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const apiKey = process.env.REACT_APP_API_KEY;

const config = {
  apiKey: apiKey,
  authDomain: "myshop-3a0ab.firebaseapp.com",
  databaseURL: "https://myshop-3a0ab.firebaseio.com",
  projectId: "myshop-3a0ab",
  storageBucket: "",
  messagingSenderId: "237989075483",
  appId: "1:237989075483:web:25f8c86cc867541f"
};


export const createUserProfileDoc = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocs = async (collectionKey, objToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollecionsSnapshotToMap = (collections) => {
  const transformCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
