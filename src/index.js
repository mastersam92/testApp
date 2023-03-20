import React from 'react';
import { Provider } from 'react-redux';

import Navigation from './navigation';

import store from './reducer';

const ProvideredApp = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default ProvideredApp;
