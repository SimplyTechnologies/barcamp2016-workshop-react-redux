import { connect } from 'react-redux';

import Forecast from './Forecast';

const mapStateToProps = (state) => ({
  loading: state.forecast.loading,
  loaded: state.forecast.loaded,
  error: state.forecast.error,
  forecast: state.forecast.data,
});

export default connect(mapStateToProps)(Forecast);
