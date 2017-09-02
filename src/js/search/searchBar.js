import React from 'react'
import { Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.label = 'Find your movie';
  }

  onKeyUp(event) {
    var searchWord;
    if (event.keyCode === 13) {
      searchWord = event.target.value;
      this.search(searchWord);
    }
  }

  search(searchWord) {
    
  }

  render() {
    return (
      <div>
        <Row className="show-grid">
          <Col xs={12} md={12} className="inputBar">
          <form onSubmit={this.search} action="/search">
            <FormGroup controlId="formBasicText">
              <ControlLabel>{this.label.toUpperCase()}</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter text"
                onKeyUp={this.onKeyUp}
              />
              <FormControl.Feedback />
              <HelpBlock>Validation is based on string length.</HelpBlock>
            </FormGroup>
          </form>
          {/* <input type="text" placeholder="" onKeyUp={this.onKeyUp} /> */}
          </Col>
        </Row>
      </div>
    );
  }
}

export default SearchBar
