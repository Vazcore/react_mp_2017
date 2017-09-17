import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import SearchBar from './search/searchBar';
import FilmHeader from './film/filmHeader';
import SubHeaderSearchInfo from './search/searchInfo'

import { HeaderBlock } from '../style/header';
import CommonStyles from '../style/common';
import { Grid, Row, Col } from 'react-bootstrap';

const paddingReset = {paddingLeft: 0, paddingRight: 0};

const Header = () => (
  <header style={HeaderBlock.block}>
    <div style={HeaderBlock.wrapper}>
      <Grid style={Object.assign({}, paddingReset, CommonStyles.block)}>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <nav style={HeaderBlock.navigation}>
              <Link style={CommonStyles.nav_link} to='/'>netflixroulette</Link>
            </nav>
          </Col>
        </Row>
        
        <Switch>
          <Route exact path='/' component={SearchBar} />
          <Route path='/search' component={SearchBar} />
          <Route path='/film' component={FilmHeader} />
        </Switch>
      </Grid>
      <div style={CommonStyles.subheader}>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
            <Switch>            
              <Route path='/search' component={SubHeaderSearchInfo} />
              <Route path='/film' component={FilmHeader} />
            </Switch>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  </header>
)

export default Header
