import React from 'react'
import { Grid } from 'react-bootstrap'
import Content from './content'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/index';

const paddingReset = {paddingLeft: 0, paddingRight: 0};

const store = createStore(allReducers);

const App = () => (
  <Provider store={store}>
    <Grid fluid={true} style={paddingReset}>
      <Content />
    </Grid>
  </Provider>
)

export default App