import { all, call } from 'redux-saga/effects';
import { fetchCollectionStartSaga } from './shop/sagas';
import { userSagas } from './user/sagas';
import { cartSagas } from './cart/sagas';
import { shopSaga } from './shop/sagas';

export default function* rootSaga() {
  yield all([
    call(fetchCollectionStartSaga),
    call(userSagas),
    call(cartSagas),
    call(shopSaga)
  ])
}
