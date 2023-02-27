import React from 'react';
import {RiHeartLine,RiShoppingCart2Line} from "react-icons/ri";
import { RxPerson } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import "./Header02.css";
import Icons2 from './Icons2/Icons2';



const Header02 = () => {
  return (
    <div className='C-header2'>
        <div className='header2'>
            <div className='logo'>
                <h1 className='logo-h1'>Store</h1>
            </div>
            <div className='search'>
                <input type="text" className='input-search' placeholder='Enter your product name...'/>
                <button className='btn-search'><BsSearch/></button>
            </div>
            <ul className='List-icons2'>
             <Icons2><RxPerson/></Icons2>  
             <Icons2><RiHeartLine/></Icons2>
             <Icons2><RiShoppingCart2Line/></Icons2>
             
            </ul>


            

        </div>
        <hr style={{"paddingTop":"20px"}}/>



    </div>
  )
}

export default Header02