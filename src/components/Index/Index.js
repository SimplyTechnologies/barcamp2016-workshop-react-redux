import React from 'react';

import { ActionBar, Location, WeatherList } from 'components';

export default function Index() {
  return (
    <div className="container">
      <Location />
      <ActionBar />
      <WeatherList />
    </div>
  );
}
