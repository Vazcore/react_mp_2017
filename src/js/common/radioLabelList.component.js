import React from 'react'
import commonStyles from '../../style/common'
import Label from './label.component'
import RadioLabel from './radioLabel.component'

class RadioLabelList extends React.Component {
  constructor(props) {
    super(props)
  }

  renderOptions(options) {
    return options.map((option, index) => <RadioLabel key={index} />)
  }

  render() {
    return (
      <div className="form-group" style={Object.assign({},commonStyles.formGroup, commonStyles.overflowHidden)}>
        {
          this.props.label && 
          <Label label={this.props.label} />
        }
        {this.renderOptions(this.props.options)}
      </div>
    )
  }
}

export default RadioLabelList
