import { combineReducers } from 'redux';

import weather from './weather';
import location from './location';
import forecast from './forecast';

export default combineReducers({
  weather,
  forecast,
  location,
});
