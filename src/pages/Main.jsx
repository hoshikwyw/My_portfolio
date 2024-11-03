import React from 'react'
import "../assets/js/main"

const Main = () => {
  return (
    <div>
      <nav className=''>
        <a href="#">Oro Wee</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
        <button>Flip Tiles</button>
      </nav>
      <div className="board" id='board'></div>
      <div className="blockContainer" id='blockContainer'>
        <div className="blocks" id='blocksWrapper'></div>
      </div>
    </div>
  )
}

export default Main