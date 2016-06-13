import { createStore, compose, applyMiddleware } from 'redux';
import reducer from 'redux/modules/reducer';
import createSagaMiddleware from 'redux-saga';

import sagas from 'redux/modules/sagas';

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducer, initialState, compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  if (module.hot) {
    module.hot.accept('./modules/reducer', () => {
      store.replaceReducer(require('./modules/reducer')); // eslint-disable-line
    });
  }


  sagaMiddleware.run(sagas);

  return store;
}
