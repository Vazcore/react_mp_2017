import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import commonStyles from '../../style/common'
import RadioLabelList from '../common/radioLabelList.component'

import movies from '../../../public/test_data/movies.json'

class SubHeaderSearchInfo extends React.Component {
  constructor(props) {
    super(props)
    this.searchOptions = [
      {active: false, name: 'release date'},
      {active: true, name: 'rating'}
    ];
    console.log(movies[2])
  }
  render() {
    return (
      <Row className="show-grid">
        <Col xs={6} md={6}>
          <span style={commonStyles.text_block}>{movies.length} movies found </span>
        </Col>
        <Col xs={6} md={6}>
        <RadioLabelList options={this.searchOptions}
          optionStyle={commonStyles.sortOption}
          activeOptionStyle={commonStyles.activeSortLabel}
          listStyle={{float: 'right'}}
          labelStyle={Object.assign({}, commonStyles.padding_right_sm, commonStyles.sortLabel)}
          label="Sort by" />
        </Col>
      </Row>
    )
  }
}

export default SubHeaderSearchInfo
