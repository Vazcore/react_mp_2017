import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './home/home';
import Search from './search/search'
import Film from './film/film';
import { withRouter } from 'react-router-dom'
import NotFound from './notFound';
import { Grid, Row, Col } from 'react-bootstrap';

import commonStyles from '../style/common'

class Main extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return(
    <Grid>
      <Row className="show-grid">
        <Col xs={12} md={12}>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/search/:keyword/:criteria' component={Search}/>
            <Route path='/film' component={Film}/>
            <Route path='*' component={NotFound}/>
          </Switch>
        </Col>
      </Row>
    </Grid>
    )
  }
}


export default withRouter(Main)