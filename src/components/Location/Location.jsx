import React, { PropTypes } from 'react';

const styles = require('./Location.scss');

export default function Location(props) {
  const {
    getLocation,
    locationLoading, locationLoaded, locationError, location,
  } = props;

  return (
    <div className="row">
      <div className="col-md-12">
        <button
          className="btn btn-success"
          type="button"
          onClick={getLocation}
        >
          Get Location
        </button>
        <span className={styles['location-info']}>
           {locationLoaded && <code>{location.lat}, {location.lng}</code>}
           {locationLoading && 'Getting...'}
           {!locationLoaded && locationError}
        </span>
      </div>
    </div>
  );
}

Location.propTypes = {
  getLocation: PropTypes.func.isRequired,
  locationLoading: PropTypes.bool,
  locationLoaded: PropTypes.bool,
  locationError: PropTypes.string,
  location: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }),
};
