import React from 'react';

import { RiTwitterLine } from 'react-icons/ri';
import { RiLinkedinLine } from 'react-icons/ri';
import { RiGithubLine } from 'react-icons/ri';

import Logo from '../img/logo.svg';

import '../styles/landing.css';
import '../styles/responsive.css';
import ImgHome from '../img/ImgHome.png'
import MenuPopupState from '../components/menu/MenuPopupState';
import { colors } from '@material-ui/core';



function Landing(){
    return (
        <div id="page-landing">
            

          <header>
            <img 
              src={Logo} 
              className="logo"
              alt="Guto"/>
            
            <div className="social">          
            <a href="https://twitter.com/PauloGrillo94">
                <RiTwitterLine 
                  size={24} 
                  color="#cbe0e1"
                  className="social-icon"
                  />          
            </a>
            <a href="https://twitter.com/PauloGrillo94">
                <RiGithubLine
                  size={24} 
                  color="#cbe0e1"
                  />
            </a>

            <a href="https://twitter.com/PauloGrillo94">
                <RiLinkedinLine 
                  size={25} 
                  color="#cbe0e1"
                  className="social-icon"
                  />
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