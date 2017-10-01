import React from 'react'
import commonStyles from '../../style/common'
import Label from './label.component'

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
      <div className="form-group" style={commonStyles.formGroup}>
        {
          this.props.label && 
          <Label label={this.props.label} style={commonStyles.label} htmlFor={this.props.id} />
        }
        <div style={commonStyles.relative}>
          <input type={this.props.type}
            onChange={this.onChangeInput}
            className="form-control"
            style={this.props.componentStyle}
            value={this.state.value}
            id={this.props.id}
            placeholder={this.props.placeholder}/>
          {
            this.props.icon &&
            <img src={this.props.icon} style={Object.assign({}, commonStyles.icon, commonStyles.absoluteRight)} />
          }
        </div>
      </div>
    )
  }
}

export default InputComponent
