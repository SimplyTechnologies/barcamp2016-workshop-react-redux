import React from 'react';

import { Weather, Forecast } from 'components';

export default function WeatherList() {
  return (
    <div className="row">
      <div className="col-md-12">
        <Weather />
      </div>
      <div className="col-md-12">
        <Forecast />
      </div>
    </div>
  );
}
