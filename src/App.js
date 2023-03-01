import React from 'react'
import {Navbar,Review} from './components/index'
import {About,Services,Reviews,Footer} from './containers/index'

import './App.css'

function App() {
  return (
    <div className='App'>
      <div>
        <Navbar />
        <About />
      </div>
      <Services />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App