import React from 'react';

import { FiTwitter } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';

import '../styles/landing.css';
import '../styles/responsive.css';
import ImgHome from '../img/ImgHome.png'
import MenuPopupState from '../components/menu/MenuPopupState';



function Landing(){
    return (
        <div id="page-landing">
            

          <header>
            <div className="social">
                <a href="https://twitter.com/PauloGrillo94">
                <FiTwitter 
                  size={28} 
                  color="#FFF"/>
                </a>

                <a href="https://twitter.com/PauloGrillo94">
                <FiLinkedin 
                  size={28} 
                  color="#FFF"/>
                </a>

                <a href="https://twitter.com/PauloGrillo94">
                <FiGithub
                  size={28} 
                  color="#FFF"/>
                </a>
              </div>

              <div className="menu">
                <MenuPopupState />
              </div>

        </header>
          
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