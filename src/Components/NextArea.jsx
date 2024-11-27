import React from 'react'
import MEDAL from '../assets/MEDAL.png'


const NextArea = () => {
  return (
    <div className='NextMiniBoxHolder'>
        <div className="NextMiniBox">
            <div className='NextMiniBoxHeader'>
                <hr />
            </div>
            <div className='NextMiniBoxBody'>
                <div className='AlphaNumericBox'>
                    <span>35</span>
                    <p>AWARDS</p>
                </div>
                <div className='AwardImageBox'>
                    <div className="img">
                        <img src={MEDAL} alt="medal" />
                    </div>
                </div>
                <div className='GapBox'></div>
                <div className='TextBox'>
                    <i>We’re proud to take part in our clients’ success</i>
                </div>
            </div>
            <div className='NextMiniBoxFooter'>
               <li><span>18</span>
                    <h4>MOBI/WEBI<br /><section>AWARDS</section></h4></li>
               <li><span>7</span>
                    <h4>IT<br /><section>AWARDS</section></h4></li>
               <li><span>3</span>
                    <h4>BEST APP<br /><section>DESIGN</section></h4></li>
               <li><span>2</span>
                    <h4>BRAND<br /><section>AWARDS</section></h4></li>
               <li><span>2</span>
                    <h4>BEST MOBILE<br /><section>AWARDS</section></h4></li>
               <li><span>3</span>
                    <h4>OTHER<br /><section>AWARDS</section></h4></li>
            </div>
        </div>
    </div>
  )
}

export default NextArea