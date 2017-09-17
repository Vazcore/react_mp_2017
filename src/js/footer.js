import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { HeaderBlock } from '../style/header'
import commonStyles from '../style/common'

class Footer extends React.PureComponent {
  render() {
    return (
      <div style={commonStyles.footer}>
        <nav style={HeaderBlock.navigation}>
          <Link style={commonStyles.nav_link} to='/'>netflixroulette</Link>
        </nav>
      </div>
    )
  } 
}

export default Footer;