import { connect } from 'react-redux';

import { getLocation } from 'redux/modules/location';
import Location from './Location';

const mapStateToProps = (state) => ({
  locationLoading: state.location.loading,
  locationLoaded: state.location.loaded,
  locationError: state.location.error,
  location: state.location.data,
});

export default connect(mapStateToProps, { getLocation })(Location);
