import { takeLatest, call, put } from 'redux-saga/effects'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase'
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shopActions'
import ShopActionTypes from './shopTypes'

export function* fetchCollectionsAsync() {
  yield console.log('fired')

  try {
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (err) {
    yield put(fetchCollectionsFailure(err.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}
