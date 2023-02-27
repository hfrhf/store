import React from 'react'
import Add from './Add/Add'
import "./Container.css"
import End from './End/End'
import Fixed from './Fixed/Fixed'
import Products from './Products/Products'


const Container = () => {
    
  return (
    <div>
      <div className='contai-container'>
        <Fixed/>
        <div className='add-products'>
          <Add/>
          <Products/>
        </div>
        
      </div>

    
    </div>

    
    


  )
}

export default Container