import { createStore, compose } from 'redux';
import reducer from 'redux/modules/reducer';

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, compose(
    // applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  if (module.hot) {
    module.hot.accept('./modules/reducer', () => {
      store.replaceReducer(require('./modules/reducer')); // eslint-disable-line
    });
  }


  return store;
}
