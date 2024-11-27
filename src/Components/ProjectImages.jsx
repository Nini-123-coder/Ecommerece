import React, { useState } from 'react'
import Data2 from "./data/Data2.json";
import './ProjectImages.css'

const ProjectImage = () => { 

  const [preId, setpreId]= useState(1);
  const handleN = () => {
    if(preId ===2 || preId > 2){
      setpreId(1);
    }else{
      setpreId(preId + 1);
    }
  }

  const handleP= () => {
    if (preId === 1 || preId < 1) {
      setpreId(11);
    } else {
      setpreId(preId - 1);
    }}
    const currentDat = Data2.find(e => e.id === preId);
  return (
    <div className='wholeCon'>
      <div className='WholeBodyUpper'>
        <div className="WholeBodyUpperHolder">
          <div className='WholeBodyUpperLeft'>
            <div className='peruLine'>
              <hr />
            </div >
            <h6 className='MiddleTexts'>Here are just a few of <br /> <em>our friends</em></h6>
          </div>
          <div className='WholeBodyUpperRight'>
            <div className='WholeBodyUpperRightHolder'>
              <p>Organizations</p>
              <p>Technology</p>
            </div>
          </div>
        </div>
      </div>
     
      <div className="WholeBody">
        <div className='wholeimage'>
          {
            currentDat &&(
             
          
        <img src={currentDat.image1} alt="" key={currentDat.id}/>
          )}
        </div>
      
      
        <div className="circleBody">
        <div className="circle" onClick={handleN}></div>
   
        </div>
      </div>
    </div>
  )
}

export default ProjectImage