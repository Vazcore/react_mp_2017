import React from 'react'
import commonStyles from '../../style/common'

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
          value={this.props.buttonValue}/>
      </div>
    )
  }
}

export default ButtonComponent
