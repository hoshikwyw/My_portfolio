import React from 'react'
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