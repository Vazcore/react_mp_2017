import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { HeaderBlock } from '../style/header'
import commonStyles from '../style/common'
import footerStyles from '../style/footer'

class Footer extends React.PureComponent {
  render() {
    return (
      <div style={footerStyles.block}>
        <nav style={HeaderBlock.navigation}>
          <Link style={commonStyles.nav_link} to='/'>netflixroulette</Link>
        </nav>
      </div>
    )
  } 
}

export default Footer;