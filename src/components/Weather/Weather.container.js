import { connect } from 'react-redux';

import Weather from './Weather';

const mapStateToProps = (state) => ({
  loading: state.weather.loading,
  loaded: state.weather.loaded,
  error: state.weather.error,
  weather: state.weather.data,
});

export default connect(mapStateToProps)(Weather);
