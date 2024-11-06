import React from 'react'
import Path from './route/Path'
import Navbar from './Navbar'
import TileBoard from './pages/TileBoard'
import About from './pages/About'
import Projects from './pages/Projects'

const App = () => {
  return (
    <div className=' mainWrapper max-w-screen overflow-hidden'>
      <TileBoard />
      <About />
      <Projects />
    </div>
  )
}

export default App