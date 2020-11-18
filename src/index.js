import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import { GlobalStyles } from './global-styles';
import 'normalize.css';
import { firebase } from './lib/firebase';
import {FirebaseContext} from './context/firebase';

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <Provider store={store}>
        <App />
      </Provider>
    </FirebaseContext.Provider>
  </>,

  document.getElementById('root')
);