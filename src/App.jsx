import React from 'react'
import Path from './route/Path'
import Navbar from './Navbar'

const App = () => {
  return (
    <div>
      <div>
        <Path />
      </div>
      <div className="">
        <Navbar />
      </div>
    </div>
  )
}

export default App