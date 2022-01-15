import React from 'react'

// import 'antd/dist/antd.css';
import './Main.scss';

import VideoBanner from './components/VideoBanner/VideoBanner';
import ScrollContainer from './components/ScrollContainer/ScrollContainer';
import DownloadSection from './components/DownloadSection/DownloadSection';
import ProductSlider from './components/ProductSlider/ProductSlider';

function App() {

let n = 9;


  return (
    <section className="main-container">
      <aside>
        <div className="logo">
          <a href="">
            <img src="./images/logo.svg" alt="Road Wings" />
          </a>
        </div>

        <div className="menu">
         
          <div className="dots">
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
    </section>
  );
}

export default App;
