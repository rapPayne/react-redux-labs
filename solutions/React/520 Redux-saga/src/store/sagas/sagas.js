import { all, take, takeEvery, put, call } from 'redux-saga/effects';
import { actionTypes, actions } from '../actions';

function* helloSaga() {
  yield console.log("redux-saga ran successfully.");
}

function* howdySaga() {
  //yield takeEvery('SAY_HELLO');  // <-- Add this line
  yield console.log("Howdy!!")
}
function* watchSayHelloSaga() {
  yield takeEvery('SAY_HELLO', helloSaga);
}

function* fetchFilms(action) {
  const films = yield fetch('/api/films').then(res => res.json());
  yield put(actions.setFilms(films));
}
function* watchFetchFilms() {
  yield takeEvery('FETCH_FILMS', fetchFilms);
}

export function* rootSaga() {
  yield all([
    watchSayHelloSaga(), 
    howdySaga(), 
    watchFetchFilms(),
  ]);
}