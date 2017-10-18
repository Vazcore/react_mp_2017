import React from 'react'
import {
  Label as LabelStyled
} from '../../styled/common'
import Label from './label.component'
import RadioLabel from './radioLabel.component'

class RadioLabelList extends React.Component {
  constructor(props) {
    super(props)
  }

  renderOptions(options, style, activeStyle) {
    return options.map(
      (option, index) => <RadioLabel key={index}
                          chooseOption={this.props.chooseOption}
                          optionStyle={style}
                          activeOption={this.props.activeOption}
                          activeOptionStyle={activeStyle}
                          option={option} />
    )
  }

  render() {
    return (
      <div style={this.props.listStyle}>
        {
          this.props.label && 
          <Label styledComponent={LabelStyled} label={this.props.label} style={this.props.labelStyle} />
        }
        {this.renderOptions(this.props.options, this.props.optionStyle, this.props.activeOptionStyle)}
      </div>
    )
  }
}

export default RadioLabelList
