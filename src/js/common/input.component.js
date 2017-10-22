import React from 'react'
import {
  FormGroup,
  RelativeDiv,
  IconImage,
  Label as LabelStyled
} from '../../styled/common'
import styled from 'styled-components'
import Label from './label.component'
import DropDownList from './dropdownList'

const AbsoluteRightIcon = IconImage.extend`
  position: absolute;
  right: 20px;
  top: 7px;
`;

class InputComponent extends React.Component {
  constructor(props) {
    super(props)
    this.onChangeInput = this.onChangeInput.bind(this)
    this.state = {value: ''}
  }

  componentWillReceiveProps(props) {
    this.setState({value: props.initValue})
    this.props.onChangeElement({id: this.props.id, value: props.initValue})
  }

  onChangeInput(event) {
    // todo validation
    var value = event.target.value;
    this.setState({value})
    this.props.onChangeElement({id: this.props.id, value})
  }

  render() {
    return (
      <FormGroup className="form-group">
        {
          this.props.label && 
          <Label label={this.props.label} styledComponent={LabelStyled} htmlFor={this.props.id} />
        }
        <RelativeDiv>
          <input type={this.props.type}
            onChange={this.onChangeInput}
            className="form-control"
            autoComplete={this.props.autocomplete}
            style={this.props.componentStyle}
            value={this.state.value}
            id={this.props.id}
            disabled={this.props.disabled === true}
            placeholder={this.props.placeholder}/>
          {
            this.props.icon &&
            <AbsoluteRightIcon src={this.props.icon} />
          }
          {this.props.dropdownList && this.props.dropdownList.length &&
            <DropDownList onDropDownItemClick={this.props.onDropDownItemClick} list={this.props.dropdownList}></DropDownList>
          }
        </RelativeDiv>
      </FormGroup>
    )
  }
}

export default InputComponent
