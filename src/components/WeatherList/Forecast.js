import React, { PropTypes } from 'react';
import LoadInfo from 'components/LoadInfo/LoadInfo';
import WeatherCard from './WeatherCard';

export default function Forecast({ loading, loaded, error, forecast }) {
  return (
    <div className="row">
      <div className="col-md-12">
        <LoadInfo loading={loading} error={error} />

        <div className="row">
             {loaded && forecast.list.map((w, i) => (
               <div className="col-md-3">
                 <WeatherCard key={i} weather={w} showDate />
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
