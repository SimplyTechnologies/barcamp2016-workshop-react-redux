import { connect } from 'react-redux';

import { load as loadWeather, reset } from 'redux/modules/weather';
import { load as loadForecast } from 'redux/modules/forecast';
import ActionBar from './ActionBar';


function loadData(dispatch, location) {
  dispatch(loadWeather(location));
  dispatch(loadForecast(location));
}

function mapStateToProps(state) {
  return {
    isEnabled: state.location.loaded,
    location: state.location.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    reset: () => dispatch(reset),
    load: loadData.bind(null, dispatch),
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    load: dispatchProps.load.bind(null, stateProps.location),
  };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ActionBar);
