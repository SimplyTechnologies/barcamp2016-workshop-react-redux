import React from 'react';

import ActionBar from 'components/ActionBar/ActionBar.container';
import Location from 'components/Location/Location.container';
import WeatherList from 'components/WeatherList/WeatherList';

export default function Index() {
  return (
    <div className="container">
      <ActionBar />
      <Location />
      <WeatherList />
    </div>
  );
}
