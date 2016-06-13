import { fork } from 'redux-saga/effects';
import { watchWeatherLoad } from './weather.saga';
import { watchLocationGet } from './location.saga';

export default function* sagas() {
  yield [
    fork(watchWeatherLoad),
    fork(watchLocationGet),
  ];
}
