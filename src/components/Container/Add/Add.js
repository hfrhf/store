import React from 'react'
import "./Add.css"
import img16 from "../../../images/products/16.jpg"
import Stars from '../Products/ProductCard/Stars/Stars'
import { AiFillStar,AiOutlineStar } from "react-icons/ai";
const Add = () => {
  return (
    <div className='add'>
      <div className='add-card'>
      <div className='add-img'>
        <img src={img16}/>
      </div>
      <div className='add-info'>
        <h2 className='h2-adda'>SHAMPOO, CONDITIONER & FACEWASH PACKS</h2>
        <p className='p-add'>Lorem ipsum dolor sit amet consectetur Lorem ipsum <br/> dolor dolor sit amet consectetur Lorem ipsum dolor</p>
        <div className='add-stars'>
           <AiFillStar/>
           <AiFillStar/>
           <AiFillStar/>
           <AiFillStar/>
           <AiFillStar/>
        </div>
        <h2 className='h2-add'>$150.00</h2>
        <button className='btn-add'>Add To Cart</button>
        <p className='p-sold'>ALREADY SOLD: 20<span className='p-span'>AVAILABLE: 40</span></p>
        
      </div>

      </div>

    </div>

  )
}

export default Add