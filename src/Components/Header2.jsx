import React from 'react'
import './Header2.css'
import { HiFastForward } from "react-icons/hi";
import { BsFastForward } from "react-icons/bs";

const Header2 = () => {
  return (
    <div className='body'>
      <div className="wrapper2">
         <div className="first">
         <span className='user1'></span>
         <main className="h1sec">
          Experience Matters
         </main>
         <div className='second'>
         <div className="play">
         <BsFastForward style={{ fontSize:'10'}}/><HiFastForward style={{marginLeft:'-4', fontSize:'10'}}/><h6>PLAY SHOWREEL</h6>     
         </div>
        <div className="some">
      <div className="bodyone">
      <div className="bodytwo">
    <div className="mouse">
     <div className='smaller'>

     </div>
    </div>
      </div>
      </div>
    </div>
   </div>
    
        </div>
         </div>
         </div>
      
      
  )
}

export default Header2
