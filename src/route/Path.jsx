import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Main from '../pages/Main'
import Projects from '../pages/Projects'
import About from '../pages/About'
import Contact from '../pages/Contact'

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default Path