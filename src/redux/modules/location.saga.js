import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { GET_LOCATION, getLocationSuccess, getLocationFail } from './location';

import { getCurrentLocation } from 'tools';


function* getLocation() {
  try {
    const location = yield call(getCurrentLocation);
    yield put(getLocationSuccess(location));
  } catch (e) {
    yield put(getLocationFail(e.toString()));
  }
}

export function* watchLocationGet() {
  yield takeEvery(GET_LOCATION, getLocation);
}
