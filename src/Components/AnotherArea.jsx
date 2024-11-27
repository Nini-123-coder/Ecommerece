import React from 'react'
import './AnotherArea.css'
import imageonelogo from '../assets/imageonelogo.webp'
import imagetwologo from '../assets/imagetwologo.webp'
import imagethreelogo from '../assets/imagethreelogo.webp'
import imagefourlogo from '../assets/imagefourlogo.webp'


const AnotherArea = () => {
  return (
    <div className='miniBoxHolder'>
        <div className="miniBox">
            <img src={imageonelogo} alt="imageonelogo"/>  
            <h6>ISRAEL PHILHARNOMIC <br /> <em>website</em></h6>
            <i className='italic'> Feel the beat!</i>
        </div>
        <div className="miniBox2">
        <img src={imagetwologo} alt="imagetwologo" />
        <h6>MOBILITY PAYMENT <br /> <em>mobile app</em></h6>
        <i className='italic'>The easy way!</i>
        </div>
        <div className="miniBox3">
        <img src={imagethreelogo} alt="imagethreelogo" />
        <h6> TRAIN APP <br /> <em>mobile app</em></h6>
        <i className='italic'>Plan your ride</i>
        </div>
        <div className="miniBox4">
        <img src={imagefourlogo} alt="imagefourlogo" />
        <h6>PRICE COMPARISON <br /> <em>website</em></h6>
        <i className='italic'>Find the perfect deal!</i>
        </div>
    </div>
  )
}

export default AnotherArea