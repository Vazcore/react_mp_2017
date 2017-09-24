import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './app.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/index';

const store = createStore(allReducers);

render(
  <Provider store={store}>
  <Router>
    <App />
  </Router></Provider>, document.querySelector('#app'));