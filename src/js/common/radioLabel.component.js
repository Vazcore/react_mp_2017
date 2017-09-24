import React from 'react'
import commonStyles from '../../style/common'

class RadioLabel extends React.Component {
  constructor(props) {
    super(props)    

    this.onHover = this.onHover.bind(this)
    this.onUnHover = this.onUnHover.bind(this)
    this.chooseOption = this.chooseOption.bind(this)
  }

  onHover() {
    // todo with styled
  }

  onUnHover() {
    // todo with styled
  }

  chooseOption() {
    this.props.chooseOption(this.props.option)
  }

  render() {
    return (
      <span className="optionLabel"
        onMouseEnter={this.onHover}
        onMouseLeave={this.onUnHover}
        onClick={this.chooseOption}
        style={Object.assign({}, this.props.optionStyle, (this.props.option.active ? this.props.activeOptionStyle : {}) )}>
        {this.props.option.name}
      </span>
    )
  }
}

export default RadioLabel
