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
import { searchMoviesMethod } from '../helpers/movies';


class Search extends React.Component {
  constructor(props) {
    super(props)
    this.onChoose = this.onChoose.bind(this)
    this.keyword = this.props.match.params.keyword
    this.criteria = this.props.match.params.criteria
    this.state= {movies: []};
    this.currentStore = {
      dispatch: this.props.dispatch,
      getState: () => ({
        movies: this.props.movies,
        activeDirector: this.props.activeDirector,
        search_criteria: this.props.search_criteria
      })
    };
  }

  componentWillMount() {
    searchMoviesMethod(
      this.currentStore,
      this.props.match
    );
  }

  componentDidUpdate(props) {
    if (this.props.match.params.keyword !== this.keyword || this.criteria !== this.props.match.params.criteria) {
      this.keyword = this.props.match.params.keyword
      this.criteria = this.props.match.params.criteria
      searchMoviesMethod(
        this.currentStore,
        this.props.match
      );
    }
  }

  static fetchData(store, match) {
    return searchMoviesMethod(store, match);
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
    selectMovie,
    dispatch
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
