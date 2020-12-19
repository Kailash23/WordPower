import {all} from 'redux-saga/effects';

import {authSaga} from './auth-saga';

const root = function* root() {
  yield all([authSaga()]);
};

export default root;
