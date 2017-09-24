import React from 'react'
import commonStyles from '../style/common'

class Footer extends React.PureComponent {
  render() {
    return (
      <div style={commonStyles.formGroup}>
        <div style={commonStyles.panelDescription}>Not Found</div>
      </div>
    )
  } 
}

export default Footer;