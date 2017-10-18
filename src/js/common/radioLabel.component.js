import React from 'react'
import styled from 'styled-components'
import { colors } from '../../style/variables'

const RadioLabelStyled = styled.span`
  &:hover {
    background-color: ${colors.addtionalColor} !important;
    color: white !important;
  }
`;

class RadioLabel extends React.Component {
  constructor(props) {
    super(props)    

    this.chooseOption = this.chooseOption.bind(this)
  }

  chooseOption() {
    this.props.chooseOption(this.props.option)
  }

  render() {
    return (
      <RadioLabelStyled className="optionLabel"
        onClick={this.chooseOption}
        style={Object.assign({}, this.props.optionStyle, (this.props.option.name === this.props.activeOption.name  ? this.props.activeOptionStyle : {}) )}>
        {this.props.option.name}
      </RadioLabelStyled>
    )
  }
}

export default RadioLabel
