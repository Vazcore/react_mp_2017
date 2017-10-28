import React from 'react';
import { render, hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './app.js';
import { Provider } from 'react-redux';
import createStore from './reducers/index';

const store = createStore(window.__APP_STORE__);
delete window.__APP_STORE__;

hydrate(
  <Provider store={store}>
  <Router>
    <App />
  </Router></Provider>, document.querySelector('#app'));