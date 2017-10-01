import React from 'react'
import { Link } from 'react-router-dom';
import commonStyles from '../../style/common'
import { Row, Col } from 'react-bootstrap'
import filmStyles from '../../style/film'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectMovie } from '../actions/movies'

// todo remake movies via fetch
import movies from '../../../public/test_data/movies.json'

class FilmHeader extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    if (this.props.selectedMovie) this.movie = this.props.selectedMovie
    // if user hit the url from the link
    this.foundMovie(this.props.match.params.title)
  }
  componentWillUpdate(props) {
    if (props.selectedMovie) this.movie = props.selectedMovie
  }
  foundMovie(title) {
    var search = movies.filter(movie => movie.show_title === title)
    if (search.length) this.movie = search[0]
  }
  render() {
    return (
      <div>
        <Link style={commonStyles.ButtonLink} to='/'>Search</Link>
        <Row className="show-grid">
          <Col xs={12} md={12} style={commonStyles.pageBlock}>
            <Col xs={5} sm={5} md={5}>
              <img src={this.movie.poster} style={filmStyles.poster} />
            </Col>
            <Col xs={12} sm={7} md={7} style={filmStyles.infoBlock}>
              <p style={filmStyles.title}>{this.movie.show_title} <span style={filmStyles.rating}>{this.movie.rating}</span></p>
              <p style={filmStyles.description}>{this.movie.category}</p>
              <p style={filmStyles.info}>
                <span style={commonStyles.inlineBlock}>{this.movie.release_year}</span>
                <span style={commonStyles.inlineBlock}>{this.movie.runtime}</span>
              </p>
              <p style={Object.assign({}, filmStyles.description, commonStyles.marginTop)}>{this.movie.summary}</p>
              <p style={Object.assign({}, filmStyles.category, commonStyles.marginTop)}>Director: {this.movie.director}</p>
              <p style={filmStyles.category}>Cast: {this.movie.show_cast}</p>
            </Col>
          </Col>
        </Row>
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
    selectedMovie: state.selectedMovie
  };
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(FilmHeader))
