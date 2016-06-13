import { takeEvery } from 'redux-saga';

import { LOAD } from './weather';

function* loadWeather({ payload: { lat, lng } }) {
  console.log(lat, lng);
}

export function* watchWeatherLoad() {
  yield takeEvery(LOAD, loadWeather);
}
