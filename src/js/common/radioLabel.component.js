import React from 'react'
import commonStyles from '../../style/common'

class RadioLabel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: this.props.option.active
    }

    this.onHover = this.onHover.bind(this)
    this.onUnHover = this.onUnHover.bind(this)
  }

  onHover() {
    this.setState({active: true})
  }

  onUnHover() {
    if (!this.props.option.active) this.setState({active: false})    
  }

  chooseOption() {
    // todo with redux
  }

  render() {
    return (
      <span className="optionLabel"
        onMouseEnter={this.onHover}
        onMouseLeave={this.onUnHover}
        onClick={this.chooseOption}
        style={Object.assign({}, commonStyles.optionLabel, (this.state.active ? commonStyles.optionLabelActive : {}) )}>
        {this.props.option.name}
      </span>
    )
  }
}

export default RadioLabel
