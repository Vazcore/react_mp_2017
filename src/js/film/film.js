import React from 'react'
import FilmList from '../film/filmList'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectMovie } from '../actions/movies'

class Film extends React.PureComponent {
  constructor(props) {
    super(props)
    this.onChoose = this.onChoose.bind(this)
  }

  onChoose(movie) {
    this.props.selectMovie(movie)
    this.props.history.push('/film/' + encodeURIComponent(movie.show_title))
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <FilmList movies={this.props.moviesByDirector} onChoose={this.onChoose} />
      </div>
    )
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectMovie
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie,
    moviesByDirector: state.moviesByDirector,
  };
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Film))
