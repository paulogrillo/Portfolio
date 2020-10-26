import React from 'react';


import MenuPopupState from '../../components/menu/MenuPopupState';
import SocialMedia from '../social-icons/SocialMedia';
import Logo from '../../assets/img/logo.svg';
import './style.css';


function Header (){
    return(
        <div className="content-header">
            <img 
              src={Logo} 
              className="logo"
              alt="Guto"/>
            <SocialMedia />
            <div className="menu">
                <MenuPopupState />
            </div>
            
        </div>
    );
}

export default Header;