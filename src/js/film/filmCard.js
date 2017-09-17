import React from 'react'
import { Row,  Col } from 'react-bootstrap'
import commonStyles from '../../style/common'
import filmStyles from '../../style/film'

class FilmCard extends React.Component {
  constructor(props) {
    super(props)
    this.onChoose = this.onChoose.bind(this)
  }

  onChoose() {
    this.props.onChoose(this.props.movie)
  }

  render() {
    return (
      <Col xs={12} sm={4} md={4} style={filmStyles.block} onClick={this.onChoose}>
        <img src={this.props.movie.poster} style={filmStyles.poster} />
        <Row style={filmStyles.previewInfo}>
          <Col xs={8} sm={8} md={9} style={commonStyles.text_block}>{this.props.movie.show_title}</Col>
          <Col xs={4} sm={4} md={3}
            style={filmStyles.filmYear}>
            <div style={Object.assign({}, commonStyles.text_block, filmStyles.filmYearEdge)}>{this.props.movie.release_year}</div>
          </Col>
          <Col xs={12} sm={12} md={12} style={filmStyles.category}>
          {this.props.movie.category}
          </Col>
        </Row>
      </Col>
    )
  }
}

export default FilmCard