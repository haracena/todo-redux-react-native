import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import MiApp from './src';

export default function App() {
  return (
    <Provider store={store}>
      <MiApp />
    </Provider>
  );
}
