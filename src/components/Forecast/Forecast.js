import React, { PropTypes } from 'react';
import { LoadInfo, WeatherCard } from 'components';

export default function Forecast({ loading, loaded, error, forecast }) {
  return (
    <div className="row">
      <div className="col-md-12">
        <LoadInfo loading={loading} error={error} />

        <div className="row">
             {loaded && forecast.list.map((w, i) => (
               <div key={i} className="col-md-3">
                 <WeatherCard weather={w} showDate />
               </div>
             ))}
        </div>
      </div>
    </div>
  );
}

Forecast.propTypes = {
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  forecast: PropTypes.object,
};
