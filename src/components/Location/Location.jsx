import React, { PropTypes } from 'react';
import { LoadInfo } from 'components';

const styles = require('./Location.scss');

function LocationInfo({ lat, lng }) {
  return (
    <span>
      <code className="m-l-1">
        {lat}, {lng}
      </code>
    </span>
  );
}

LocationInfo.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};


export default function Location(props) {
  const {
    getLocation,
    locationLoading, locationLoaded, locationError, location,
  } = props;

  return (
    <div className={`row ${styles.location}`}>
      <div className="col-md-6">
        <button
          className="btn btn-success"
          type="button"
          onClick={getLocation}
        >
          Get Location
        </button>

           {location && <LocationInfo {...location} />}
      </div>
      <div className="col-md-6">
        <LoadInfo loading={locationLoading} loaded={locationLoaded} error={locationError} />
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
