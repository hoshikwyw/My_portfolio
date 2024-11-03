import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
// import Main from '../pages/Main'
import Projects from '../pages/Projects'
import About from '../pages/About'
import Contact from '../pages/Contact'
import TileBoard from '../pages/TileBoard'

const Path = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<TileBoard />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default Path