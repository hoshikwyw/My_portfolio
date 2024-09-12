import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Main from '../pages/Main'
import Projects from '../pages/Projects'

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default Path