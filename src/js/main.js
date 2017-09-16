import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './home/home';
import Search from './search/search';
import Film from './film/film';
import { Grid, Row, Col } from 'react-bootstrap';

import commonStyles from '../style/common'

const Main = () => (
  <Grid>
    <Row className="show-grid">
      <Col xs={12} md={12}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/search' component={Search}/>
          <Route path='/film' component={Film}/>
        </Switch>
      </Col>
    </Row>
  </Grid>
)

export default Main