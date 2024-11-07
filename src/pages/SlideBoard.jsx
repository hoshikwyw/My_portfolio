import React from 'react'
import "../assets/css/slideBoard.css"

const SlideBoard = () => {
  return (
    <div className="projectWrapper">
      <div className=' slideContainer' id='slideContainer'>
        <div className=" slideOverlay" id='slideOverlay'></div>
        <div className=" projectSlider" id='projectSlider'></div>
      </div>
    </div>
    
  )
}

export default SlideBoard