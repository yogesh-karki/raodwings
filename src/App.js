import React,{useState, useEffect} from 'react'

// import 'antd/dist/antd.css';
import './Main.scss';

import VideoBanner from './components/VideoBanner/VideoBanner';
import ScrollContainer from './components/ScrollContainer/ScrollContainer';
import DownloadSection from './components/DownloadSection/DownloadSection';
import ProductSlider from './components/ProductSlider/ProductSlider';


function App() {

let n = 9;
let [menuBox, setMenuBox] = useState(false)
let [dots, setDots] = useState(false)

menuBox ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible"

let menuOpen = () => {
  setMenuBox(!menuBox)
  setDots(!dots)

}

let menuItems = ["Home","About us" , "Shop", "Sign up"]






  return (
    <section className="main-container">
      <aside>
        <div className="logo">
          <a href="">
            <img src="./images/logo.svg" alt="Road Wings" />
          </a>
        </div>

        <div className="menu" onClick={menuOpen}>
         
          <div className={dots == true ? 'dots close' : 'dots'} >
            {
               [...Array(n)].map((e, i) => <span key={i}></span>)
            }
            
          </div>
        </div>
      </aside>

      <main>
        <VideoBanner />
          
        <ScrollContainer />
          
        <ProductSlider />
        <DownloadSection />


      </main>

      <section className={menuBox == true ? 'menuBox active' : 'menuBox'}>
            <div className="bg">
              <h1>ROADWINGS</h1>
              <h1>ROADWINGS</h1>
              <h1>ROADWINGS</h1>
              <h1>ROADWINGS</h1>
            </div>

        <ul>
          {
            menuItems.map((data, index) => {
              return( 
                <li key={index}><a href=""  >  {data}</a> </li>
              )
            })
          }

        </ul>

        <div className="footer-icon">

        </div>
      </section>
    </section>
  );
}

export default App;
