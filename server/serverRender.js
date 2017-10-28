
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../src/js/app.js';
import createStore from '../src/js/reducers/index';

function renderPage(html, state) {
  
  const page = `
  <!DOCTYPE html>
  <html lang="en">
  <head>  
    <base href="/">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Netflix and chill</title>
  </head>
  <body>
    <div id="app">${html}</div>
    <script>
      // WARNING: See the following for security issues around embedding JSON in HTML:
      // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
      window.__APP_STORE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}
    </script>
    <script type="text/javascript" src="dist/resource.bundle.js"></script>
    <script type="text/javascript" src="dist/source.bundle.js"></script></body>
  </html>
  `;
  
  return page;
}

function serverRender(mode, req, res) {
  const context = {};
  const store = createStore({});
  const app = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );
  
  const html = renderToString(app);
  const state = store.getState();
  console.log(req.url);
  if (context.url) {
    return res.redirect(context.url);
  }
  const page = renderPage(html, state);
  return page;
}


export default serverRender;

