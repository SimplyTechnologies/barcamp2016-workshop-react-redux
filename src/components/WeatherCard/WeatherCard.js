import React, { PropTypes } from 'react';

const styles = require('./WeatherCard.scss');

export default function WeatherCard({ weather, showDate }) {
  return (
    <div className={`card ${styles.card}`}>
      <h3 className="card-header">
          {showDate ? weather.dateFormatted : `${weather.city}, ${weather.country}`}
      </h3>
      <div className="card-block">
        {!showDate && <h4 className="card-title">Now</h4>}
        <div className="card-text">
          <span>
            <i className={`wi ${weather.icon}`} />&nbsp;
            <span>{weather.temp} ˚C</span>
          </span>
        </div>
        <div className="card-text">
             {weather.sunrise && <span title="Sunrise">
               <i className="wi wi-sunrise" /> {weather.sunrise}
             </span>}
             {weather.sunset && <span className="m-l-1" title="Sunset">
               <i className="wi wi-sunset" /> {weather.sunset}
             </span>}
        </div>
        <div className="card-text">
             {weather.windDeg && <span title="Wind">
               <i className={`wi ${weather.windIcon}`} /> {weather.wind} m/s
             </span>}
        </div>
      </div>
    </div>
  );
}

WeatherCard.propTypes = {
  weather: PropTypes.object.isRequired,
  showDate: PropTypes.bool,
};
