import React from 'react';
import '../../App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import Home from '../pages/Home';
import Skills from '../pages/skills'
import About from '../pages/About';
import MyForm from '../pages/myform';



const Navbar = () => {
    return (
        <div class="navbar-fixed">
         <nav className= 'teal'>
          <div class="nav-wrapper">
            <ul class="hide-on-med-and-down">
              <li><a href={Home}>Home</a></li>
              <li><a href={About}>About Me</a></li>
              <li><a href={Skills}>Skills</a></li>
              <li><a href={MyForm}>Contact me</a></li>
            </ul>
          </div>
         </nav>
        </div>
    );
    
};

export default Navbar;