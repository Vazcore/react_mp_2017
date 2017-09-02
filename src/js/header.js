import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import SearchBar from './search/searchBar';
import FilmHeader from './film/filmHeader';
import Paper from 'material-ui/Paper';

import { HeaderBlock } from '../style/header';
import { Grid, Row, Col } from 'react-bootstrap';


const Header = () => (
  <header>    
    <Paper style={HeaderBlock.block} zDepth={2}>
      <div style={HeaderBlock.wrapper}>
        <nav className="sdsdssss" style={HeaderBlock.navigation}>
          <Link to='/'>netflixroulette</Link>
        </nav>
        <Switch>
          <Route exact path='/' component={SearchBar} />
          <Route path='/search' component={SearchBar} />
          <Route path='/film' component={FilmHeader} />
        </Switch>
      </div>
    </Paper>
  </header>
)

export default Header
