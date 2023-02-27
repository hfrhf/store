import React from 'react'
import "./Fixed.css"
import img2 from "../../../images/products/1.jpg"
import img3 from "../../../images/rob.svg"
import img4 from "../../../images/icons/bag.svg"
import img5 from "../../../images/icons/coat.svg"
import img6 from "../../../images/icons/cosmetics.svg"
import img7 from "../../../images/icons/shorts.svg"
import img8 from "../../../images/icons/glasses.svg"
import img9 from "../../../images/icons/tee.svg"
import img10 from "../../../images/products/watch-3.jpg"
import img11 from "../../../images/products/sports-3.jpg"




import Collapce from './Collapce/Collapce'
import Stars from '../Products/ProductCard/Stars/Stars'

const Fixed = () => {
  
  
  
  return (
    <div className='All-Fixed'>
      <div className='sticky'>
        <div className='Category'>
        <h1 className='h1-category'>CATEGORY</h1>
        <Collapce img={img3} title1={"one"} title2={"two"} title3={"three"} title4={"four"}     />
        <Collapce img={img4} title1={"one"} title2={"two"} title3={"three"} title4={"four"}     />
        <Collapce img={img5} title1={"one"} title2={"two"} title3={"three"} title4={"four"}        />
        <Collapce img={img6} title1={"one"} title2={"two"} title3={"three"} title4={"four"}     />
        <Collapce img={img7} title1={"one"} title2={"two"} title3={"three"} title4={"four"}     />
        <Collapce img={img8} title1={"one"} title2={"two"} title3={"three"} title4={"four"}     />
        <Collapce img={img9} title1={"one"} title2={"two"} title3={"three"} title4={"four"}     />
      
        
       
          
        

      </div>
      <div className='Best'>
        <h1 className='h1-best'>BEST SELLERS</h1>
        <div className='carts-best'>
        <div className='cart-best'>
           <div className='img-best'>
             <img src={img2}/>
            
           </div>
           <div className='info-best'>
               <h1>Baby Fabric Shoes</h1>
               <Stars/>
               <h2>$5.00</h2>
             </div>
         </div>
         <div className='cart-best'>
           <div className='img-best'>
             <img src={img10}/>
            
           </div>
           <div className='info-best'>
               <h1>Baby Fabric Shoes</h1>
               <Stars/>
               <h2>$5.00</h2>
             </div>
         </div>
         <div className='cart-best'>
           <div className='img-best'>
             <img src={img11}/>
            
           </div>
           <div className='info-best'>
               <h1>Baby Fabric Shoes</h1>
               <Stars/>
               <h2>$5.00</h2>
             </div>
         </div>
         <div className='cart-best'>
           <div className='img-best'>
             <img src={img5}/>
            
           </div>
           <div className='info-best'>
               <h1>Baby Fabric Shoes</h1>
               <Stars/>
               <h2>$5.00</h2>
             </div>
         </div>
        </div>



      </div>
      </div>
      


    </div>
  )
}

export default Fixed