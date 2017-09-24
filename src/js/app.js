import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Header from './header'
import Main from './main'
import Footer from './footer'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setSearchCriteria, setSortCriteria, changeSearchCriteria, changeSortCriteria } from './actions/criterias'
import {search, sort } from './search/criterias'

const paddingReset = {paddingLeft: 0, paddingRight: 0};

class App extends React.Component {
  constructor(props) {
    super(props)

    this.props.changeSearchCriteria(search[0])
    this.props.changeSortCriteria(sort[1])

    this.props.setSearchCriteria(search)
    this.props.setSortCriteria(sort)
  }

  render() {
    return (
      <Grid fluid={true} style={paddingReset}>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <Header />
          </Col>
          <Col xs={12} md={12}>
            <Main />
          </Col>
          <Footer />
        </Row>
      </Grid>
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


export default withRouter(connect(mapStateToProps, matchDispatchToProps)(App))