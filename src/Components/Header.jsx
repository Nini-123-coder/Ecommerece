import React from 'react'
import './Header.css'
import { FaCaretRight } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { CgMenuLeft } from "react-icons/cg";
const Header = () => {
const data=[{
    font:  'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'

}]
  return (
    <div className='Headerwrap'>
        <div className="wrapper">
            <div className='textdiv'>
                <div className="textdiv2">
                <div className='div'>
                    <h3 style={{color:'black'}}>U <span className="small">X</span></h3>
                    
                    <p className='para'>PERT</p>
                    
                    <FaCaretRight className='care2'/>
                </div>
                <div className='care'>
               
                </div>
                <div className='text2'>
                <FaCaretRight className='care2'/>
                    <h3 style={{fontSize:'13px',color:'black', fontFamily:'lucida calligraphy', fontStyle:'italic'}}>
                   
                        HOME
                    </h3>
                    </div>
                </div>
               
                
                    
               
            </div>
            
            <div className='side'>
                <div style={{fontSize:'20px'}} className="h5r">
                    Menu
                </div>
             
               <div className='iconer'>
               <CgMenuRight className='icon1'  style={{ fontSize:'15'}}/> 
               </div>
            
            </div>
        </div>
       
    </div>
    
  )
}

export default Header