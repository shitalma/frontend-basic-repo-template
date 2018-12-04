import { call, fork, put, take, all } from 'redux-saga/effects';

import api from '../constants/api';
import { FETCH_USERS } from '../constants/actionTypes/usersActionTypes';
import { updateUserData } from '../actions/users';

export function* getUsers() {
  const response = yield call(api.Users.get());

  if (response && response.data) {
    const data = (response && response.data) || [];
    console.log(data, ' **********');
    yield put(updateUserData(data));
  }
}

export function* watchGetUsers() {
  while (true) {
    yield take(FETCH_USERS);
    yield fork(getUsers);
  }
}

function* usersSaga() {
  yield all([fork(watchGetUsers)]);
}

export default usersSaga;
