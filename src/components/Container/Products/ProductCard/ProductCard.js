import React from 'react'
import "./ProductCard.css"
import { AiFillStar } from "react-icons/ai";
import Stars from './Stars/Stars';


const ProductCard = (props) => {


  return (
    <div className='card-products'>
     <div className='img-products'>
        <img src={props.image}/>
     </div>
     <div className='info-products'>
      <div className='h2-products'>
        <h2>{props.title}</h2>
      </div>
      <div className='p-products'>
        <p>{props.text}</p>
      </div>
      <div className='stars'><Stars/></div>
      <div className='price-products'>
        <h2>{props.price}</h2>
      </div>
      

     </div>

    </div>
  )
}

export default ProductCard