import React from 'react'
import Header from './header'
import Main from './main'
import { BrowserRouter } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Main />
    </div>
  </BrowserRouter>
)

export default App