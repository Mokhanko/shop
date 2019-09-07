import { takeLatest, call, put, all } from 'redux-saga/effects';
import { firestore, convertCollecionsSnapshotToMap } from "../../firebase";
import { fetchCollectionStart, fetchCollectionError, fetchCollectionSuccess } from "./";

export function* fetchCollectionsAsync(){
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollecionsSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch(error){
    yield put(fetchCollectionError(error));
  }
}

export function* fetchCollectionStartSaga() {
  yield takeLatest(
    fetchCollectionStart,
    fetchCollectionsAsync
  );
}

export function* shopSaga() {
  yield all([call(fetchCollectionStartSaga)])
}
