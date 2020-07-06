import React from 'react';
import '../../App.css';



const Navbar = () => {
    return (

        <div class="navbar-fixed">
         <nav className= 'teal'>
          <div class="nav-wrapper">
            <ul class="hide-on-med-and-down">
              <li><a href="Home">Home</a></li>
              <li><a href="#!">About Me</a></li>
              <li><a href="#!">Education</a></li>
              <li><a href="#!">Skills</a></li>
              <li><a href="myForm">Contact me</a></li>
            </ul>
          </div>
         </nav>
        </div>
    );
    
};




export default Navbar;