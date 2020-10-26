import React from 'react';

import '../../assets/styles/global.css';
import '../../assets/styles/responsive.css';
import './landing.css';
import ImgHome from '../../assets/img/ImgHome.png'

import Header from '../../components/header/Header';


function Landing(){
    return (
      <div id="page-landing">
        <div className="header">
          <Header />
        </div>  
        <div className="content-wrapper">
            
            <main>
              <img src={ImgHome} alt=""/>        
              <h1>Marketing, Performance</h1>
              <h2> E Transformação Digital.</h2>       
            </main>         
          </div>
      </div>     
    );
}

export default Landing;