import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './containers/App';
import DevTools from './containers/DevTools';
import reducer from './reducers';
import 'bulma/css/bulma.css';
import './styles.css';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    DevTools.instrument(),
  ),
);

render(
  <Provider store={store}>
    <App />
    {/* <DevTools /> */}
  </Provider>,
  document.getElementById('root'),
);
