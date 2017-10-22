import React from 'react'
import { Redirect } from 'react-router';
import { Row, Col } from 'react-bootstrap'
import InputComponent from '../common/input.component'
import ButtonComponent from '../common/button.component'
import RadioLabelList from '../common/radioLabelList.component'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchMovie, setActiveDirector } from '../actions/movies'
import { changeSearchCriteria } from '../actions/criterias'

import ArrowEnterIcon from '../../../public/img/arrow_enter.png'
import commonStyles from '../../style/common'
import API from '../helpers/api'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {directorsList: [], inputKeyword: ''}
    this.label = 'Find your movie';
    this.seachInputId = 'searchInput'
    this.form = {}
    this.directorId
    this.searchUrl = 'search'
    this.search = this.search.bind(this)
    this.onChangeElement = this.onChangeElement.bind(this)
    this.changeSearchOption = this.changeSearchOption.bind(this)
    this.pickPersonFromTheList = this.pickPersonFromTheList.bind(this)
  }

  changeSearchOption(option) {
    this.props.changeSearchCriteria(option);
  }

  pickPersonFromTheList(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.getAttribute('data-name');
    this.directorId = target.getAttribute('data-id');
    this.setState({directorsList: [], inputKeyword: name});
    this.props.setActiveDirector({id: this.directorId, name});
  }

  search(event, option) {
    if (event) event.preventDefault()
    if (!this.form[this.seachInputId] || !this.form[this.seachInputId].length) return;

    this.props.history.push(
      '/search/'+ encodeURIComponent(this.form[this.seachInputId]) + '/' +
      encodeURIComponent((option && option.prop) ? option.prop : this.props.search_active_criteria.prop)
    );
  }

  searchDirector(name) {
    API.searchPerson(name)
    .then(response => {
      if (response.results && response.results.length) {
        const list = response.results.slice(0, 5);
        this.setState({directorsList: list});
      }
    })
  }

  onChangeElement({id, value}) {
    if (this.form[id] === value) return;
    this.form[id] = value;    
    this.setState({inputKeyword: value});
    if (this.props.search_active_criteria.name === 'director') {
      if (value.length > 3) {
        if (this.directorId && !this.state.directorsList.length) {
          this.directorId = undefined;
          return;
        }
        this.searchDirector(value); 
      }
    }
  }

  render() {
    return (
      <div>
        <Row className="show-grid">
          <Col xs={12} md={12} style={commonStyles.pageBlock}>
          <form onSubmit={this.search}
            autoComplete="off"
            style={commonStyles.searchForm}
            action="/search">
            <InputComponent label={this.label}
              type="text"
              autocomplete="off"
              initValue={this.state.inputKeyword}
              componentStyle={commonStyles.searchInput}
              placeholder="Search"
              onChangeElement={this.onChangeElement}
              dropdownList={this.state.directorsList}
              onDropDownItemClick={this.pickPersonFromTheList}
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
    changeSearchCriteria,
    setActiveDirector
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
