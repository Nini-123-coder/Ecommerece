import React, {useState, useEffect} from 'react'
import AnotherArea from './Components/AnotherArea'
import Airtcle from './Components/Airtcle'
import Body from './Components/Body'
import Foot from './Components/Foot'
import NextArea from './Components/NextArea'
import BigImageArea from './Components/BigImageArea'
// import AfterBigImageArea from './Components/AfterBigImageArea'
import Header from "./Components/Header.jsx"
import Header2 from "./Components/Header2.jsx"
import Footer from "./Components/Footer.jsx"
import image from "./assets/Loading.gif"
import ProjectImages from './Components/ProjectImages.jsx'





function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return(
      <div className='loadding' style={{width:"100%", height:"100vh", background:"#fcb900", display:"flex", justifyContent:"center",
       alignItems:"center"}}>
        <div
        style={{width:"20%", height:"30%", display:"flex", justifyContent:"center",
        alignItems:"center"}}>
            <img src={image} alt="" />
        </div>
      </div>
    )
  }
  return (
    <div style={{}}>
      <Header/>
      <Header2/>
       <Airtcle/> 
       <Body/> 
      <Foot/> 
      <AnotherArea/>
      <NextArea/>
      <BigImageArea/>
      <ProjectImages/>
      <Footer/>
    {/* <Footerdown/> */}
    </div>
  )
}
export default App  