import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import commonStyles from '../../style/common'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class FilmSubHeader extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Col xs={12} sm={12} md={12} style={commonStyles.block}>
        <span style={commonStyles.text_block}>Films by {this.props.selectedMovie.director} </span>
      </Col>
    )
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(FilmSubHeader)
