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
    
    API.findMovies(this.criteria, keyword)
    .then(movies => this.props.searchMovie(movies))
    .catch(err => console.log(err))

    this.props.changeSearchCriteria(this.props.search_criteria.filter(c=>c.prop===this.criteria)[0])
    this.props.changeKeyword(this.keyword)
  }

  onChoose(movie) {
    this.props.selectMovie(movie)
    this.props.history.push('/film/' + encodeURIComponent(movie.show_title))
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
  };
}


export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Search))
