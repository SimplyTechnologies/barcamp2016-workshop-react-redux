import React from 'react';
import { render } from 'react-dom';
import { Root } from 'components';
import configureStore from 'redux/create';
import { AppContainer } from 'react-hot-loader';

require('./resources/weather-icons.scss');

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('container')
);

if (module.hot) {
  module.hot.accept('./components/Root/Root', () => {
    const Root = require('./components/Root/Root'); // eslint-disable-line
    render(
      <AppContainer>
        <Root store={store} />
      </AppContainer>,
      document.getElementById('container')
    );
  });
}

