import React from 'react'

class Label extends React.PureComponent {
  constructor(props) {
    super(props)
    this.styledLabel = this.props.styledComponent || 'label';
  }
  render() {
    return (
      <this.styledLabel
        style={this.props.style}
        htmlFor={this.props.htmlFor}>
        {this.props.label}
      </this.styledLabel>
    )
  } 
}

export default Label;