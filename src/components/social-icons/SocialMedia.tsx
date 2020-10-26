import React from 'react';


import { RiTwitterLine } from 'react-icons/ri';
import { RiLinkedinLine } from 'react-icons/ri';
import { RiGithubLine } from 'react-icons/ri';


function SocialMedia (){
    return( 
        <div className="social">          
        <a href="https://twitter.com/PauloGrillo94">
            <RiTwitterLine 
            size={24} 
            color="#cbe0e1"
            className="social-icon"
            />          
        </a>
        <a href="https://github.com/paulogrillo">
            <RiGithubLine
            size={24} 
            color="#cbe0e1"
            />
        </a>

        <a href="https://www.linkedin.com/in/paulo-augusto-grillo/">
            <RiLinkedinLine 
            size={25} 
            color="#cbe0e1"
            className="social-icon"
            />
        </a>
    </div>
    );
}

export default SocialMedia;