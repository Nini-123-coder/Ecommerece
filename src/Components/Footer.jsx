import React, { useState } from 'react';
import "./Footer.css";
import Data from "./data/Data.json";
import nextarrow from "../assets/nextarrow.png"
import arrow from "../assets/arrow.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";





const Footer = () => {
  const [currentId, setCurrentId] = useState(1);
  const [bounceClass, setBounceClass] = useState('');

  const handleNext = () => { 
    if (currentId === 11 || currentId > 11) {
      setCurrentId(1);
    } else {
      setCurrentId(currentId + 1);
    }
    setBounceClass('bounce-right');
    setTimeout(() => setBounceClass(''), 500); 
  };

  const handlePre = () => {
    if (currentId === 1 || currentId < 1) {
      setCurrentId(11);
    } else {
      setCurrentId(currentId - 1);
    }
    setBounceClass('bounce-left');
    setTimeout(() => setBounceClass(''), 500);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentData = Data.find(e => e.id === currentId);

  console.log(currentData);

  return (
    <div className='FooterContainer'>
      <div className="FooterUp">
      <div className="line">
            <hr />
          </div>
          <div className="FooterUpBox1">
          <div className="footerbox2text">
            <div className="text1">
             <h2>WHAT<br/><span>THEY SAY</span></h2>
             
            </div>
            <div className="text2">
              <i>We swear we didn't force them to</i>
            </div>
          </div>

          </div>
      <div className="FooterUpBox2">
      <div className="arrowbox">
            <img className='prev' src={arrow} alt="Previous" onClick={handlePre} />
          </div>
      <div className="footerbox3Holder ">

        {currentData && (
            <div className="FooterCommentbox" key={currentData.id}>
              <div className="footerbox3left">
                <div className="footerimage">
                  <img src={currentData.image} alt="woman" />
                </div>
                <div className="footertext ">
                  <h3>{currentData.text3}</h3>
                  <div className="line">
                    <hr />
                  </div>
                  <p>{currentData.text2}</p>
                  
                    <img src={currentData.image2} alt="logo" />
                  
                </div>
              </div>
              <div className="footerbox3right">
              <span>{currentData.text}{currentData.number} {currentData.word} {currentData.comment} {currentData.txt}{currentData.texts} </span>
              {/* <span></span>
              <span></span> */}
            
              </div>
            </div>
          )}
        
</div>
        
<div className="arrowbox">
            <img className='next' src={nextarrow} alt="Next" onClick={handleNext} />
          </div>

      </div>
      </div>
   
      <div className="FooterDown">
        <div className="FooterDownBox">
          
          <div className="FooterDownBoxchild2">
          <div className="FooterDownBoxchild1">
          <FaArrowRightLong  className='arrow2' style={{ cursor: 'pointer' , height:"30%", width:"80%"} }/>
          </div>
            <h2>CONTACT US <br/> <i>We love making new friends</i></h2>
           
          </div>
          <div className="FooterDownBoxchild3">
            <section>+972-1599-59 69 69 <h3>office@uxpert.com</h3></section>
              
          </div>
          <div className="FooterDownBoxchild4">
            <section>30 Shacham st.<br/>Petah Tiqwa, Israel</section>
          
          </div>

        </div>
      </div>
      <div className="lastFooter">
        <div className="lastFooter1">
         <span>© Copyright UXPERT Ltd.</span>
        </div>
        <div className="lastFooter2">
          <span>To Top </span>
          <IoIosArrowUp  onClick={handleScrollToTop} style={{ cursor: 'pointer' }}/> 
            
        </div>
        <div className="lastFooter3">
          <p>f</p>
          <FaInstagram className='insta' style={{ cursor: 'pointer' }}/>
          <p>in</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;