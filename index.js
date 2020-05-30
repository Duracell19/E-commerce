import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import configureStore from './store';
import App from './components/App';

// eslint-disable-next-line no-lone-blocks
{ /* <script src="http://localhost:8097"></script> */ }
// eslint-disable-next-line no-undef
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
