import React from 'react'
import { AiFillStar,AiOutlineStar } from "react-icons/ai";
import "./Stars.css"

const Stars = () => {
  return (
    <div className='stars-icons'>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiOutlineStar/>
    </div>
  )
}

export default Stars