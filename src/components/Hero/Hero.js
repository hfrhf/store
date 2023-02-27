import React,{useState} from 'react'
import "./Hero.css"
import SimpleImageSlider from "react-simple-image-slider";
import image02 from "../../images/ban2.png"
import Slider from './Slider/Slider';
import img1 from "../../images/rob.svg"
import img2 from "../../images/icons/bag.svg"
import img3 from "../../images/icons/coat.svg"
import img4 from "../../images/icons/cosmetics.svg"
import img5 from "../../images/icons/shorts.svg"
import img6 from "../../images/icons/glasses.svg"
import img7 from "../../images/icons/tee.svg"
import Slideshow from './Slider02/Slideshow';





const Hero = () => {
  


 

  return (
    <div className='slider-All'>
      <div className='contai'>
        <Slideshow/>
      </div>
      
      

     
        

     
     <div className='slider'>
      <Slider img={img1}/>
      <Slider img={img2}/>
      <Slider img={img3}/>
      <Slider img={img4} />
      <Slider img={img5} />
      <Slider img={img6} />
      <Slider img={img7} />
     </div>
    </div>
    
    
    

    

  )
}

export default Hero