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
  }
  render() {
    return (
      <div>
        <Col xs={12} sm={4} md={4} style={commonStyles.block}>
          <span style={commonStyles.text_block}>{movies.length} movies found </span>
        </Col>
        <Col xs={12} sm={8} md={8} style={commonStyles.block}>
        <RadioLabelList options={this.searchOptions}
          optionStyle={commonStyles.sortOption}
          activeOptionStyle={commonStyles.activeSortLabel}
          listStyle={{float: 'right'}}
          labelStyle={Object.assign({}, commonStyles.padding_right_sm, commonStyles.sortLabel)}
          label="Sort by" />
        </Col>
      </div>
    )
  }
}

export default SubHeaderSearchInfo
