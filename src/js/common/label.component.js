import React from 'react'
import commonStyles from '../../style/common'

class Label extends React.PureComponent {
  render() {
    return <label style={commonStyles.label} htmlFor={this.props.htmlFor}>{this.props.label.toUpperCase()}</label>
  } 
}

export default Label;