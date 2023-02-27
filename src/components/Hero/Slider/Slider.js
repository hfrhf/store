import React from 'react'
import "./Slider.css"
import img1 from "../../../images/rob.svg"

const Slider = (props) => {
  return (
    <div className='cart'>
      <div className='info'>
        <div className='immg'>
          <img src={props.img}/>
        </div>
        
        <div className='info-text'>
          <h1>T-SHIRTS</h1>
          <a>Show All</a>
        </div>
      </div>
        
      </div>
  )
}

export default Slider