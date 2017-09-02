import React from 'react'
import Header from './header'
import Main from './main'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Content = () => (
  <div>
    <Header />
    <Main />
  </div>
);

const App = () => (
  <MuiThemeProvider>
    <Content />
  </MuiThemeProvider>
)

export default App