import React from 'react'
import "./Products.css"
import shirt from "../../../images/products/shirt.jpg"
import data from "../Products/Data"
import ProductCard from './ProductCard/ProductCard'
const Products = () => {
    const info =data.map((item)=>{
       return <ProductCard image={item.img} title={item.title} text={item.text} price={item.price}/>
    })

  return (
    <div className='products'>
        <div className='cards-products'>
            {info}


        </div>

    </div>
  )
}

export default Products