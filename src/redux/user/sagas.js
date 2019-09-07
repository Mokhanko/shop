import { takeLatest, put, all, call } from 'redux-saga/effects';
import { auth, googleProvider, createUserProfileDoc, getCurrentUser } from '../../firebase';
import {
  googleSignInStart,
  emailSignInStart,
  checkUserSession,
  signUpStart,
  signOutStart,
  signActionsFailure,
  signInSuccess,
  signOutSuccess,
  signUpSuccess,
} from './';

export function* getSnapshotAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(createUserProfileDoc, userAuth, additionalData);
    const userSnapShot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }))
  } catch(error) {
    yield put(signActionsFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotAuth(user);
  } catch(error) {
    yield put(signActionsFailure(error));
  }
}

export function* signInWithEmail({ payload: { emailAndPassword: { email, password } } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotAuth(user);
  } catch(error) {
    yield put(signActionsFailure(error))
  }
}

export function* isUtherAuthenticated() {
  try{
    const userAuth = yield getCurrentUser();
    if(!userAuth) return;
    yield getSnapshotAuth(userAuth);
  } catch (error) {
    yield put(signActionsFailure(error))
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signActionsFailure(error));
  }
}

export function* signUp({ payload: { userCredentials: { email, password, displayName }} }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName }}));
  } catch(error) {
    yield put(signActionsFailure(error))
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotAuth(user, additionalData);
}

export function* onGoogleSignInStartSaga() {
  yield takeLatest(googleSignInStart, signInWithGoogle)
}

export function* onEmailSignInStartSaga() {
  yield takeLatest(emailSignInStart, signInWithEmail)
}

export function* onCheckUserSessionSaga() {
  yield takeLatest(checkUserSession, isUtherAuthenticated)
}

export function* onSignOutStartSaga() {
  yield takeLatest(signOutStart, signOut)
}

export function* onSignUpStartSaga() {
  yield takeLatest(signUpStart, signUp)
}

export function* onSignUpSuccessSaga() {
  yield takeLatest(signUpSuccess, signInAfterSignUp)
}


export function* userSagas() {
  yield all([
    call(onGoogleSignInStartSaga),
    call(onEmailSignInStartSaga),
    call(onCheckUserSessionSaga),
    call(onSignOutStartSaga),
    call(onSignUpStartSaga),
    call(onSignUpSuccessSaga)
  ])
}
