import React from 'react'
import { Redirect } from 'react-router';
import { Row, Col } from 'react-bootstrap'
import InputComponent from '../common/input.component'
import ButtonComponent from '../common/button.component'
import RadioLabelList from '../common/radioLabelList.component'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchMovie } from '../actions/movies'
import { changeSearchCriteria } from '../actions/criterias'

import ArrowEnterIcon from '../../../public/img/arrow_enter.png'
import commonStyles from '../../style/common'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.label = 'Find your movie';
    this.seachInputId = 'searchInput'    

    this.searchUrl = 'search'

    this.state = {
      submit: false,
      form: {}
    };

    this.search = this.search.bind(this)
    this.onChangeElement = this.onChangeElement.bind(this)
    this.changeSearchOption = this.changeSearchOption.bind(this)
  }

  changeSearchOption(option) {
    this.props.changeSearchCriteria(option)
    if (this.state.form[this.seachInputId]) {
      this.search(null, this.state.form[this.seachInputId])
    }
  }

  search(event, keyword) {
    if (event) event.preventDefault()
    this.props.history.push(
      '/search/'+ encodeURIComponent(this.state.form[this.seachInputId]) + '/' +
      encodeURIComponent(this.props.search_active_criteria.prop)
    );
    // todo search
  }

  onChangeElement({id, value}) {
    var oldState = this.state;
    oldState.form[id]= value
    this.state = this.setState(oldState)
  }

  render() {
    return (
      <div>
        <Row className="show-grid">
          <Col xs={12} md={12} style={commonStyles.pageBlock}>
          <form onSubmit={this.search}
            style={commonStyles.searchForm}
            action="/search">
            <InputComponent label={this.label}
              type="text"
              componentStyle={commonStyles.searchInput}
              placeholder="Search"
              onChangeElement={this.onChangeElement}
              icon={ArrowEnterIcon}
              id={this.seachInputId} />
              <Col xs={12} md={8} style={commonStyles.block}>
                <RadioLabelList options={this.props.search_criteria}
                  chooseOption={this.changeSearchOption}
                  optionStyle={commonStyles.searchLabel}
                  activeOptionStyle={commonStyles.searchLabelActive}
                  labelStyle={Object.assign({}, commonStyles.label, commonStyles.padding_right_sm)}
                  label="SEARCH BY" />
              </Col>
              <Col xs={12} md={4} style={commonStyles.block}>
                <ButtonComponent type="submit"
                  componentStyle={commonStyles.searchButton}
                  buttonValue="SEARCH" />
              </Col>
          </form>
          </Col>
        </Row>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    searchMovie,
    changeSearchCriteria
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
    search_active_criteria: state.search_active_criteria,
    search_criteria: state.search_criteria
  };
}


export default connect(mapStateToProps, matchDispatchToProps)(SearchBar)
