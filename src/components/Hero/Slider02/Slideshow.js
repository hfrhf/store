import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image02 from "../../../images/ban2.png"
import "./Slide.css"
const Slideshow = () => {
    const images = [
        {image02},
        {image02},
        {image02},
    ];

    return (
        <Slide className="sa">
            <div className="each-slide-effect">
                <div className='nv' style={{ 'backgroundImage': `url(${image02})` }}>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div className='nv' style={{ 'backgroundImage': `url(${image02})` }}>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div className='nv' style={{ 'backgroundImage': `url(${image02})` }}>
                    
                </div>
            </div>
        </Slide>
    );
};

export default Slideshow;