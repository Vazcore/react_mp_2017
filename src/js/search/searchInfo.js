import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import commonStyles from '../../style/common'
import RadioLabelList from '../common/radioLabelList.component'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchMovie } from '../actions/movies'
import { changeSortCriteria } from '../actions/criterias'

class SubHeaderSearchInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.changeSortOption = this.changeSortOption.bind(this)
  }

  componentDidMount() {
  }

  changeSortOption(option) {
    this.props.changeSortCriteria(option)
    
    const movies = this.props.movies.sort((a,b) => parseFloat(a[option.prop]) < parseFloat(b[option.prop]))
    .map(movie=>{
      movie.c_id = Math.random() * (9999 - 99) + 9999;
      return movie;
    })
    this.props.searchMovie(movies)
  }

  render() {
    return (
      <div>
        <Col xs={12} sm={4} md={4} style={commonStyles.block}>
          <span style={commonStyles.text_block}>{this.props.movies.length} movies found </span>
        </Col>
        <Col xs={12} sm={8} md={8} style={commonStyles.block}>
        <RadioLabelList options={this.props.sort_criteria}
          chooseOption={this.changeSortOption}
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

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    searchMovie,
    changeSortCriteria
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
    sort_criteria: state.sort_criteria
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(SubHeaderSearchInfo)
