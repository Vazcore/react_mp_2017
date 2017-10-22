import React from 'react'
import FilmList from '../film/filmList'
import commonStyles from '../../style/common'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchMovie, selectMovie } from '../actions/movies'
import { changeKeyword } from '../actions/keyword'
import { changeSearchCriteria } from '../actions/criterias'
import API from '../helpers/api';
import DATES from '../helpers/dates';
import { sort } from './criterias';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.onChoose = this.onChoose.bind(this)
    this.keyword = this.props.match.params.keyword
    this.criteria = this.props.match.params.criteria
    this.state= {movies: []}
  }

  componentDidMount() {
    this.searchMovies(this.props.match.params.keyword)
  }

  componentDidUpdate(props) {
    if (this.props.match.params.keyword !== this.keyword || this.criteria !== this.props.match.params.criteria) {
      this.keyword = this.props.match.params.keyword
      this.criteria = this.props.match.params.criteria
      this.searchMovies(this.keyword)
    }
  }

  searchMovies(keyword) {
    if (!this.criteria) {
      this.criteria = this.props.search_active_criteria.prop
    }
    if (this.criteria === 'director') {
      this.searchByDirector(keyword)
    } else {
      this.searchByTitle(keyword)
    }
    
    this.props.changeSearchCriteria(this.props.search_criteria.filter(c=>c.prop===this.criteria)[0])
    this.props.changeKeyword(this.keyword)
  }

  searchByDirector(name) {
    const director = this.props.activeDirector;
    if (director.id) {
      this.getMoviesByDirector(director);
    } else {
      API.searchPerson(name)
      .then(response => {
        if (response.results && response.results.length) {
          const person = response.results[0];
          this.getMoviesByDirector(person);
        }
      })
    }
  }

  getMoviesByDirector(director) {
    API.getMoviesByPerson(director.id)
    .then(movies => {
      const moviesByDirector = DATES.findDirector(movies.crew, true)
      if (moviesByDirector.length) this.props.searchMovie(moviesByDirector)
    })
  }

  searchByTitle(title) {
    API.findMovies(title)
    .then(movies => {
      const sortedMovies = DATES.sortMovies(movies, sort[1])
      this.props.searchMovie(sortedMovies)
    })
    .catch(err => console.log(err))
  }

  onChoose(movie) {
    this.props.selectMovie(movie)
    this.props.history.push('/film/' + encodeURIComponent(movie.id))
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div style={commonStyles.pageBlock}>
        <FilmList movies={this.props.movies} onChoose={this.onChoose} />
      </div>
    )
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    searchMovie,
    changeSearchCriteria,
    changeKeyword,
    selectMovie
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
    search_criteria: state.search_criteria,
    search_active_criteria: state.search_active_criteria,
    activeDirector: state.activeDirector
  };
}


export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Search))
