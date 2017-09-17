import React from 'react'
import { Link } from 'react-router-dom';
import commonStyles from '../../style/common'
import { Row, Col } from 'react-bootstrap'
import filmStyles from '../../style/film'

// todo remake movies via redux
import movies from '../../../public/test_data/movies.json'

class FilmHeader extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    // todo remake movies via redux
    this.movie = movies[2]
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

export default FilmHeader
