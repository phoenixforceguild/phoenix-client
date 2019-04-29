import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';

const middleware = [thunk, logger];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

render(    
  <Provider store={store}>
      <App style={{height: '100%;'}} />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
