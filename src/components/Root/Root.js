import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import Index from 'components/Index/Index';

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
