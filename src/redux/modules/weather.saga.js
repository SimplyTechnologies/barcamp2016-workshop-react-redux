import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { LOAD, loadSuccess, loadFail } from './weather';
import { getWeather } from 'tools';

function* loadWeather({ payload: { lat, lng } }) {
  try {
    const weather = yield call(getWeather, lat, lng);
    yield put(loadSuccess(weather));
  } catch (e) {
    yield put(loadFail(e.toString()));
  }
}

export function* watchWeatherLoad() {
  yield takeEvery(LOAD, loadWeather);
}
