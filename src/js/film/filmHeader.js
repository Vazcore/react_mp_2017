import React from 'react'
import { Link } from 'react-router-dom';
import commonStyles from '../../style/common'
import { Row, Col } from 'react-bootstrap'
import filmStyles from '../../style/film'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectMovie, setMoviesByDirector, setActiveDirector } from '../actions/movies'
import API from '../helpers/api'
import DATES from '../helpers/dates'
import IMG from '../helpers/img'

// todo remake movies via fetch
import movies from '../../../public/test_data/movies.json'

const findDirector = (crewList) => {
  const directorsResult = crewList.filter(el => el.job === 'Director');
  return directorsResult.length > 0 ? directorsResult[0] : {}
}

class CastInfo extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  getTextOfCast(castList) {
    return castList.map(el => `${el.name} (${el.character})`)
    .join(',')
  }
  render() {
    return (
      <div>
        <p style={Object.assign({}, filmStyles.category, commonStyles.marginTop)}>
          Director: {findDirector(this.props.castInfo.crew).name}
        </p>
        <p style={filmStyles.category}>Cast: {this.getTextOfCast(this.props.castInfo.cast)}</p>
      </div>
    )
  }
}

class FilmHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  componentWillMount() {
    if (this.props.selectedMovie.id) {
      this.getCredits(this.props.selectedMovie.id)
    }
    else {
      // if user hit the url from the link
      this.foundMovie(this.props.match.params.title) 
    }
  }
  componentWillUpdate(props) {
    if (props.selectedMovie.credits){
      this.foundMoviesByDirector(findDirector(props.selectedMovie.credits.crew));
    }
  }
  getCredits(id) {
    API.getCredits(id)
    .then(castInfo => {
      this.setState({castInfo})
      this.foundMoviesByDirector(findDirector(castInfo.crew))
    })
  }
  foundMovie(title) {
    API.getMovieDetails(title)
    .then(movie => {
      this.movie = movie && movie.id ? movie : {};
      this.props.selectMovie(this.movie);
      this.setState({castInfo: this.movie.credits});
      if (this.movie.credits) {
        this.foundMoviesByDirector(findDirector(this.movie.credits.crew))
      }
    })
    .catch(err => console.log(err))
  }
  foundMoviesByDirector(director) {
    API.getMoviesByPerson(director.id)
    .then(movies => {
      const allMovies = movies.crew.concat(movies.cast);
      const moviesWithoutDuplicates = DATES.removeDuplicatesByProperty(allMovies, 'id');
      this.props.setMoviesByDirector(moviesWithoutDuplicates)
      this.props.setActiveDirector(director)
    })
  }
  render() {
    return (
      <div>
        <Link style={commonStyles.ButtonLink} to='/'>Search</Link>
        <Row className="show-grid">
          {this.props.selectedMovie.id && <Col xs={12} md={12} style={commonStyles.pageBlock}>
            <Col xs={5} sm={5} md={5}>
              {IMG.getImg(this.props.selectedMovie.poster_path)}
            </Col>
            <Col xs={12} sm={7} md={7} style={filmStyles.infoBlock}>
              <p style={filmStyles.title}>
                {this.props.selectedMovie.title} 
                <span style={filmStyles.rating}>{this.props.selectedMovie.vote_average}</span>
              </p>
              <p style={filmStyles.description}>{this.props.selectedMovie.tagline}</p>
              <p style={filmStyles.info}>
                <span style={commonStyles.inlineBlock}>{DATES.dateStringToYear(this.props.selectedMovie.release_date)}</span>
                <span style={commonStyles.inlineBlock}>{this.props.selectedMovie.runtime} minutes</span>
              </p>
              <p style={Object.assign({}, filmStyles.description, commonStyles.marginTop)}>
                {this.props.selectedMovie.overview}
              </p>
              {this.state.castInfo && <CastInfo castInfo={this.state.castInfo}></CastInfo>}
            </Col>
          </Col>}
        </Row>
      </div>
    )
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectMovie,
    setMoviesByDirector,
    setActiveDirector
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie,
    search_active_criteria: state.search_active_criteria
  };
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(FilmHeader))
