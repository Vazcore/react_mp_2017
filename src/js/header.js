import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import SearchBar from './search/searchBar';
import FilmHeader from './film/filmHeader';
import FilmSubHeader from './film/filmSubHeader';
import SubHeaderSearchInfo from './search/searchInfo'

import { HeaderBlock } from '../style/header';
import CommonStyles from '../style/common';
import { Grid, Row, Col } from 'react-bootstrap';

const paddingReset = {paddingLeft: 0, paddingRight: 0};

class Header extends React.Component {
  render() {
    return (
      <header style={HeaderBlock.block}>
     ` <div style={HeaderBlock.wrapper}>
        <Grid style={Object.assign({}, paddingReset, CommonStyles.block)}>
          <Row className="show-grid">
            <Col xs={6} md={6} style={paddingReset}>
              <nav style={HeaderBlock.navigation}>
                <Link style={CommonStyles.nav_link} to='/'>netflixroulette</Link>
              </nav>
            </Col>
            <Switch>
              <Route exact path='/' component={SearchBar} />
              <Route path='/search/:keyword/:criteria' component={SearchBar} />
              <Route path='/film' component={FilmHeader} />
            </Switch>
          </Row>
        </Grid>
        <div style={CommonStyles.subheader}>
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={12}>
              <Switch>            
                <Route path='/search/:keyword/:criteria' component={SubHeaderSearchInfo} />
                <Route path='/film' component={FilmSubHeader} />
              </Switch>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    </header>
    )
  }
}

export default Header
