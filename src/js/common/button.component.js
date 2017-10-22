import React from 'react'

class ButtonComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="form-group">
        <input type={this.props.type}
          className="form-control"
          style={this.props.componentStyle}
          id={this.props.id}
          disabled={this.props.disabled === true}
          value={this.props.buttonValue}/>
      </div>
    )
  }
}

export default ButtonComponent
