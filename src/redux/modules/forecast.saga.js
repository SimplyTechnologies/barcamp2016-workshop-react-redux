import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { LOAD, loadSuccess, loadFail } from './forecast';
import { getForecast } from 'tools';

function* loadForecast({ payload: { lat, lng } }) {
  try {
    const forecast = yield call(getForecast, lat, lng);
    yield put(loadSuccess(forecast));
  } catch (e) {
    yield put(loadFail(e.toString()));
  }
}

export function* watchForecastLoad() {
  yield* takeEvery(LOAD, loadForecast);
}
