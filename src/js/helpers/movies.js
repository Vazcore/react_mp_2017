import { changeSearchCriteria } from '../actions/criterias';
import { changeKeyword } from '../actions/keyword';
import { search, sort } from '../search/criterias';
import { 
  searchMovie,
  selectMovie,
  setMoviesByDirector,
  setActiveDirector } from '../actions/movies';
import API from './api';
import DATES from './dates';

export const getMoviesByDirector = (dispatch, director) => {
  return API.getMoviesByPerson(director.id)
  .then(movies => {
    const moviesByDirector = DATES.findDirector(movies.crew, true)
    if (moviesByDirector.length) dispatch(searchMovie(moviesByDirector));
    return moviesByDirector;
  })
};

export const searchByDirector = (store, name) => {
  const dispatch = store.dispatch;
  const state = store.getState();
  const director = state.activeDirector;    
  if (director.id) {
    return getMoviesByDirector(dispatch, director);
  } else {
    return API.searchPerson(name)
    .then(response => {
      if (response.results && response.results.length) {
        const person = response.results[0];
        return getMoviesByDirector(dispatch, person);
      }
    })
  }
};

export const searchByTitle = (dispatch, keyword) => {
  return API.findMovies(keyword)
  .then(movies => {
    const sortedMovies = DATES.sortMovies(movies, sort[1]);
    dispatch(searchMovie(sortedMovies));
    return sortedMovies;
  })
  .catch(err => console.log(err))
};

export const searchMoviesMethod = (store, match) => {
  const dispatch = store.dispatch;
  const state = store.getState();
  const { keyword, criteria } = match.params;
  let searchPromise;
  if (criteria === 'director') {
    searchPromise = searchByDirector(store, keyword)
  } else {
    searchPromise = searchByTitle(dispatch, keyword)
  }
  
  dispatch(changeSearchCriteria(search.filter(c=>c.prop === criteria)[0]));
  dispatch(changeKeyword(keyword))
  return searchPromise;
};

export const foundMoviesByDirector = (director) => {
  let moviesWithoutDuplicates = [];
  if (!director.id) return Promise.resolve(moviesWithoutDuplicates);

  return API.getMoviesByPerson(director.id)
  .then(movies => {
    if (movies.crew || movies.cast) {
      const crew = movies.crew || [];
      const cast = movies.cast || [];
      const allMovies = crew.concat(cast);      
      moviesWithoutDuplicates = DATES.removeDuplicatesByProperty(allMovies, 'id');      
    }

    return moviesWithoutDuplicates;
  })
};

export const findMovie = (dispatch, title) => {
  return API.getMovieDetails(title)
  .then(movieResponse => {
    const movie = movieResponse && movieResponse.id ? movieResponse : {};
    return movie;
    
  })
  .catch(err => console.log(err))
};

export const getMovieDetails = (store, match) => {
  const dispatch = store.dispatch;
  const state = store.getState();
  const promise = new Promise((resolve, reject) => {
    findMovie(dispatch, match.params.title)
    .then(movie => {
      if (movie.credits && movie.credits.crew.length) {
        const director = DATES.findDirector(movie.credits.crew);
        foundMoviesByDirector(director)
        .then(movies => {
          dispatch(selectMovie(movie));       
          dispatch(setMoviesByDirector(movies));    
          dispatch(setActiveDirector(director));
          
          return resolve(movies);
        });
      } else {
        return resolve(null);
      }
    })
    .catch(e => reject(e));
  }); 
  return promise;
};