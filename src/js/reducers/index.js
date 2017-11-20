import { combineReducers, createStore } from 'redux'
import {movies, moviesByDirector, activeDirector } from './movies'
import ActiveMovieReducer from './activeMovie'
import {search_criteria, sort_criteria, search_active_criteria, sort_active_criteria} from './criterias'
import keyword from './keyword'


const allReducers = combineReducers({
  movies,
  moviesByDirector,
  selectedMovie: ActiveMovieReducer,
  search_criteria,
  sort_criteria,
  search_active_criteria,
  sort_active_criteria,
  keyword,
  activeDirector
});

const getStore = function (initialState) {
  const store = createStore(allReducers, initialState);
  return store;
}

export default getStore;