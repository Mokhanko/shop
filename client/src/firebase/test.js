import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc( 'yek2bR0zgy3ySz39BGac').collection('cartItems')
  .doc('Mlu4rF8HnLo2EcWy9ydo'
);
firestore.doc('/users/yek2bR0zgy3ySz39BGac/cartItems/Mlu4rF8HnLo2EcWy9ydo');
firestore.collection('/users/yek2bR0zgy3ySz39BGac/cartItems');
