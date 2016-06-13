import React, { PropTypes } from 'react';
import LoadInfo from 'components/LoadInfo/LoadInfo';
import WeatherCard from './WeatherCard';

export default function Weather({ loading, loaded, error, weather }) {
  return (
    <div className="row">
      <div className="col-md-12">
        <LoadInfo loading={loading} error={error} />

        <div className="row">
          <div className="col-md-12">
               {loaded && <WeatherCard weather={weather} />}
          </div>
        </div>
      </div>
    </div>
  );
}

Weather.propTypes = {
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  weather: PropTypes.object,
};
