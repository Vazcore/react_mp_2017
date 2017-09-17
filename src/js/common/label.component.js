import React from 'react'
import commonStyles from '../../style/common'

class Label extends React.PureComponent {
  render() {
    return (
      <label style={this.props.style}
        htmlFor={this.props.htmlFor}>
        {this.props.label}
      </label>
    )
  } 
}

export default Label;