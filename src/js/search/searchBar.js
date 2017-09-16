import React from 'react'
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
  }

  onKeyUp(event) {
    var searchWord;
    if (event.keyCode === 13) {
      searchWord = event.target.value;
      this.search(searchWord);
    }
  }

  search(searchWord) {
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
