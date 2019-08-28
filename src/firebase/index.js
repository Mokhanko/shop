import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDrIIaTDN6TFeAE9OlXW8OZ1X5Kfw_sNx0",
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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;