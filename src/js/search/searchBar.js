import React from 'react'
import { Redirect } from 'react-router';
import { Row, Col } from 'react-bootstrap'
import InputComponent from '../common/input.component'
import ButtonComponent from '../common/button.component'
import RadioLabelList from '../common/radioLabelList.component'
import { withRouter } from 'react-router-dom'
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
    this.form = {}   

    this.searchUrl = 'search'

    this.search = this.search.bind(this)
    this.onChangeElement = this.onChangeElement.bind(this)
    this.changeSearchOption = this.changeSearchOption.bind(this)
  }

  changeSearchOption(option) {
    this.props.changeSearchCriteria(option)
    // if (this.form[this.seachInputId]) {
    //   this.search(null, option)
    // }
  }

  search(event, option) {
    if (event) event.preventDefault()
    if (!this.form[this.seachInputId].length) return;
    this.props.history.push(
      '/search/'+ encodeURIComponent(this.form[this.seachInputId]) + '/' +
      encodeURIComponent((option && option.prop) ? option.prop : this.props.search_active_criteria.prop)
    );
    // todo search
  }

  onChangeElement({id, value}) {
    this.form[id] = value
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
              initValue={this.props.keyword}
              componentStyle={commonStyles.searchInput}
              placeholder="Search"
              onChangeElement={this.onChangeElement}
              icon={ArrowEnterIcon}
              id={this.seachInputId} />
              <Col xs={12} md={8} style={commonStyles.block}>
                <RadioLabelList options={this.props.search_criteria}
                  chooseOption={this.changeSearchOption}
                  activeOption={this.props.search_active_criteria}
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
    search_criteria: state.search_criteria,
    keyword: state.keyword
  };
}


export default withRouter(connect(mapStateToProps, matchDispatchToProps)(SearchBar))
