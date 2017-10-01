import React from 'react'
import { Link } from 'react-router-dom';
import commonStyles from '../../style/common'
import { Row, Col } from 'react-bootstrap'
import filmStyles from '../../style/film'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectMovie, setMoviesByDirector } from '../actions/movies'
import API from '../helpers/api'

// todo remake movies via fetch
import movies from '../../../public/test_data/movies.json'

class FilmHeader extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    if (this.props.selectedMovie.show_title) {
      this.foundMoviesByDirector(this.props.selectedMovie.director)
    }
    else {
      // if user hit the url from the link
      this.foundMovie(this.props.match.params.title) 
    }
  }
  componentWillUpdate(props) {
    if (props.selectedMovie.director){
      this.foundMoviesByDirector(props.selectedMovie.director);
    }
  }
  foundMovie(title) {
    API.findMovies('title', title)
    .then(movies => {
      this.movie = movies[0];
      this.props.selectMovie(this.movie);
      if (this.movie.director) {
        this.foundMoviesByDirector(this.movie.director)
      }
    })
    .catch(err => console.log(err))
  }
  foundMoviesByDirector(director) {
    API.findMovies('director', director)
    .then(movies => this.props.setMoviesByDirector(movies))
  }
  render() {
    return (
      <div>
        <Link style={commonStyles.ButtonLink} to='/'>Search</Link>
        <Row className="show-grid">
          <Col xs={12} md={12} style={commonStyles.pageBlock}>
            <Col xs={5} sm={5} md={5}>
              <img src={this.props.selectedMovie.poster} style={filmStyles.poster} />
            </Col>
            <Col xs={12} sm={7} md={7} style={filmStyles.infoBlock}>
              <p style={filmStyles.title}>{this.props.selectedMovie.show_title} <span style={filmStyles.rating}>{this.props.selectedMovie.rating}</span></p>
              <p style={filmStyles.description}>{this.props.selectedMovie.category}</p>
              <p style={filmStyles.info}>
                <span style={commonStyles.inlineBlock}>{this.props.selectedMovie.release_year}</span>
                <span style={commonStyles.inlineBlock}>{this.props.selectedMovie.runtime}</span>
              </p>
              <p style={Object.assign({}, filmStyles.description, commonStyles.marginTop)}>{this.props.selectedMovie.summary}</p>
              <p style={Object.assign({}, filmStyles.category, commonStyles.marginTop)}>Director: {this.props.selectedMovie.director}</p>
              <p style={filmStyles.category}>Cast: {this.props.selectedMovie.show_cast}</p>
            </Col>
          </Col>
        </Row>
      </div>
    )
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectMovie,
    setMoviesByDirector
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie,
    search_active_criteria: state.search_active_criteria
  };
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(FilmHeader))
