import React from 'react'
import Header from './header'
import Main from './main'
import { Grid, Row, Col } from 'react-bootstrap';

const paddingReset = {paddingLeft: 0, paddingRight: 0};

const App = () => (
  <Grid fluid={true} style={paddingReset}>
    <Row className="show-grid">
      <Col xs={12} md={12}>
        <Header />
      </Col>
      <Col xs={12} md={12}>
        <Main />
      </Col>
    </Row>
  </Grid>
)

export default App