import React from 'react';
import { connect } from 'react-redux';

import WeatherChart from './WeatherChart';

const mapStateToProps = (state) => ({
  loaded: state.forecast.loaded,
  data: state.forecast.data && state.forecast.data.list,
});

export default connect(mapStateToProps)(
  (props) => (props.loaded ? (<WeatherChart {...props} />) : null)
);
