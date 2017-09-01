import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './home/home';
import Search from './search/search';
import Film from './film/film';

const Main = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/search' component={Search}/>
      <Route path='/film' component={Film}/>
    </Switch>
  </div>
)

export default Main