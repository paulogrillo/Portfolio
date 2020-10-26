import React from 'react';

import './projects.css';
import '../../assets/styles/responsive.css';
import '../../assets/styles/global.css';

import Cards from '../../components/cards/Cards';
import MenuPopupState from '../../components/menu/MenuPopupState';
import SocialMedia from '../../components/social-icons/SocialMedia';

import { Link } from 'react-router-dom';
import{ BiArrowBack} from 'react-icons/bi';


function Projects (){
    return(
        <div className="page-projects">
          
            <div className="header">

                <Link to="/" className="arrow" >
                    <BiArrowBack
                    size={32} 
                    color="#121210"
                    />
                </Link>
                <div className="social">
                    <SocialMedia />
                </div>
                <div className="menu">  
                    <MenuPopupState />
                    
                </div>

            </div>
            <div className="cards">
                <Cards />
            </div>
        
        </div>  
    );
}

export default Projects;