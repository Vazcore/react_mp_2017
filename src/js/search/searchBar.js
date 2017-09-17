import React from 'react'
import { Redirect } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'
import InputComponent from '../common/input.component'
import ButtonComponent from '../common/button.component'
import RadioLabelList from '../common/radioLabelList.component'

import ArrowEnterIcon from '../../../public/img/arrow_enter.png'
import commonStyles from '../../style/common'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.label = 'Find your movie';
    this.searchOptions = [
      {active: true, name: 'title'},
      {active: false, name: 'director'}
    ];

    this.searchUrl = 'search'

    this.state = {
      submit: false
    };

    this.search = this.search.bind(this)
  }

  onKeyUp(event) {
    var searchWord;
    if (event.keyCode === 13) {
      searchWord = event.target.value;
      this.search(searchWord);
    }
  }

  search(event) {
    event.preventDefault();
    if (this.props.router) this.props.router.push('search')
    else if (this.props.history) this.props.history.push('search')
    

    // todo search
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
              icon={ArrowEnterIcon}
              id="searchInput" />
              <Col xs={12} md={8} style={commonStyles.block}>
                <RadioLabelList options={this.searchOptions}
                  optionStyle={commonStyles.searchLabel}
                  activeOptionStyle={commonStyles.searchLabelActive}
                  labelStyle={Object.assign({}, commonStyles.label, commonStyles.padding_right_sm)}
                  label="SEARCH BY" />
              </Col>
              <Col xs={12} md={4} style={commonStyles.block}>
                <ButtonComponent type="button"
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

export default SearchBar
