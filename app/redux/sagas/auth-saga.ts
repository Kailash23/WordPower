import {delay, put, takeLatest} from 'redux-saga/effects';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  signOutRequest,
  signOutSuccess,
  signOutFailure,
} from '../slices';

function* login() {
  try {
    yield delay(1000);
    yield put(loginSuccess());
  } catch {
    yield put(loginFailure());
  }
}

function* logout() {
  try {
    yield delay(1000);
    yield put(signOutSuccess());
  } catch {
    yield put(signOutFailure());
  }
}

export function* authSaga() {
  yield takeLatest(loginRequest.type, login);
  yield takeLatest(signOutRequest.type, logout);
}
