import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Header from './header'
import Main from './main'
import Footer from './footer'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setSearchCriteria, setSortCriteria, changeSearchCriteria, changeSortCriteria } from './actions/criterias'
import {search, sort } from './search/criterias'

class Content extends React.Component {
  constructor(props) {
    super(props)

    this.props.setSearchCriteria(search)
    this.props.setSortCriteria(sort)

    this.props.changeSearchCriteria(search[0])
    this.props.changeSortCriteria(sort[1])
  }
  render() {
    return (
      <Row className="show-grid">
        <Col xs={12} md={12}>
          <Header />
        </Col>
        <Col xs={12} md={12}>
          <Main />
        </Col>
        <Footer />
      </Row>
    )
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    setSearchCriteria,
    setSortCriteria,
    changeSearchCriteria,
    changeSortCriteria
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}


export default connect(mapStateToProps, matchDispatchToProps)(Content)