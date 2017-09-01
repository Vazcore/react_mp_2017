import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import SearchBar from './search/searchBar';
import FilmHeader from './film/filmHeader';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>netflixroulette</Link></li>
      </ul>
    </nav>
    <Switch>
      <Route exact path='/' component={SearchBar} />
      <Route path='/search' component={SearchBar} />
      <Route path='/film' component={FilmHeader} />
    </Switch>
  </header>
)

export default Header
