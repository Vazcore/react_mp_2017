import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import commonStyles from '../../style/common'

class FilmSubHeader extends React.Component {
  constructor(props) {
    super(props)
    
    // todo - get director from redux
    this.director = 'Quentin Tarantino'
  }
  render() {
    return (
      <Col xs={12} sm={12} md={12} style={commonStyles.block}>
        <span style={commonStyles.text_block}>Films by {this.director} </span>
      </Col>
    )
  }
}

export default FilmSubHeader
