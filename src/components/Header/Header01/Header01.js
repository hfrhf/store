import React from 'react'
import "./Header01.css"
import {FaFacebook,FaTwitter,FaInstagram,FaLinkedin} from "react-icons/fa";
import Icons from './Icons/Icons';

const Header01 = () => {
  return (
    <div className='C-header1'>
        <div className='header1'>
         
             <ul className='List-Icons'>
              <Icons><FaFacebook/></Icons>
              <Icons><FaTwitter/></Icons>
              <Icons><FaInstagram/></Icons>
              <Icons><FaLinkedin/></Icons>
            </ul> 
            
            <div className='order-over'>
                <h1> <span>FREE SHIPPING</span> THIS WEEK ORDER OVER - $55</h1>

            </div>
            <div>
                <select className='coin'style={{"paddingRight":"10px"}}>
                    <option >USD$</option>
                    <option>EUR$</option>
                </select>
                <select className='langue'>
                    <option>ENGLISH</option>
                    <option>ESPANOL</option>
                    <option>FRANCAIS</option>
                </select>
            </div>

         </div>

            
            <hr className='hr'/>
 


        </div>

  )
}

export default Header01