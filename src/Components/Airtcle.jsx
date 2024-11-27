import React from 'react'
import './Airtcle.css'
import { FaArrowRightLong } from "react-icons/fa6";

const Airtcle = () => {
  return (
    <div className='BodyWrapper'>
        <div className='BodyWrap'>
            <div className='Body'>
              <div className="linebody">
              </div>
              <div className='mainside1'>
              <div className='Line'>
                <hr className='Liner'/>
                <p>WHO WE ARE</p>
              </div>
              </div>
              <div className='Main'>
              <div className='mainside2'>
                <h5 className='h5'>we design</h5>
               <h6 className='h6'>beautiful user experinces</h6>
               <div className="diffrent">
               <div className='Main2'>
                <h3 className='h3'>Our mission is to create a better digital world, technical and people skills that not only make us fun to work
                   with, but ensure we get the job done, and done well </h3>
                </div>
                {/* <div className='box'>
                  <h4 className='h4sec'>MORE ABOUT US</h4>
                     <FaArrowRightLong className='arrow1' />
                </div>                 */}
                </div>
                </div>
                   </div>
              </div>
            </div>
          
         </div>   
  )
}

export default Airtcle