import { combineReducers } from 'redux'
import MoviesReducer from './movies'
import ActiveMovieReducer from './activeMovie'
import {search_criteria, sort_criteria, search_active_criteria, sort_active_criteria} from './criterias'


const allReducers = combineReducers({
  movies: MoviesReducer,
  selectedMovie: ActiveMovieReducer,
  search_criteria,
  sort_criteria,
  search_active_criteria,
  sort_active_criteria
});

export default allReducers;