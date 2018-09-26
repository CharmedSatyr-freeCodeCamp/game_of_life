import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Wrapper from './containers/Wrapper';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

import './styles/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <Wrapper />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
