import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app.js';

import '../style/normalize.css';
//import '../style/bootstrap.css';

render(
  (<BrowserRouter>
    <App />
  </BrowserRouter>),
  document.querySelector('#app')
);