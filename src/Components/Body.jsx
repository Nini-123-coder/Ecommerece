import React from 'react'
import './Body.css'

const Body = () => {
  return (
    <div className='Airtcle'>
        <div className='AirtcleBody'>
            <div className='Airtcle2'>
                <hr className='Lined' />
                <p>WHAT WE DO</p>
            </div>
            <div className='Box1'>
              <div className='Box8'>
              <div className='nav1'><img src='./src/firsticon.svg'/>
              <h1>Research & Strategy</h1>
              </div>
                <div className='nav2'><img src='./src/secondicon.svg'/>
                <h2>Ux Design</h2>
                </div>
                <div  className='nav3'><img src='./src/thirdicon.svg'/>
                <h2>Visual Design</h2>
                </div>
                <div className='nav4'><img src='./src/fourthicon.svg'/>
                <h1>Usability Testing</h1>
                </div>
              
                
              
              </div>
            </div>
        </div>
    </div>
  )
}

export default Body