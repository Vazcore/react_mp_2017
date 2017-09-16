import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import SearchBar from './search/searchBar';
import FilmHeader from './film/filmHeader';

import { HeaderBlock } from '../style/header';
import CommonStyles from '../style/common';
import { Grid, Row, Col } from 'react-bootstrap';

const Header = () => (
  <header style={HeaderBlock.block}>
    <div style={HeaderBlock.wrapper}>
      <Grid>
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
    </div>
  </header>
)

export default Header
