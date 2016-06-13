import { combineReducers } from 'redux';

import weather from './weather';
import location from './location';

export default combineReducers({
  weather,
  location,
});
