import React from 'react';

import { Weather, WeatherChart, Forecast } from 'components';

export default function WeatherList() {
  return (
    <div className="row">
      <div className="col-md-12">
        <Weather />
      </div>
      <div className="col-md-12">
        <WeatherChart />
      </div>
      <div className="col-md-12">
        <Forecast />
      </div>
    </div>
  );
}
