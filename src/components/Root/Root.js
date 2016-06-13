import React from 'react';
import { Provider } from 'react-redux';
import Index from 'components/Index/Index';

import configureStore from 'redux/create';

const store = configureStore();

export default function Root() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}
