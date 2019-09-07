import { takeLatest, put, all, call } from 'redux-saga/effects';
import { clearCart } from './';
import { signOutSuccess } from '../user';

export function* clearCartOnSignOut() {
  yield put(clearCart())
}

export function* onSignOutSuccess() {
  yield takeLatest(signOutSuccess, clearCartOnSignOut)
}

export function* cartSagas(){
  yield(all([call(onSignOutSuccess)]))
}
