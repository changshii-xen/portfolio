import React from 'react'
import { Link } from 'react-router-dom';

const Navbar1 = () => {
    return (
        <nav className= 'teal'>
        <div class="nav-wrapper">

          
          <ul class="left hide-on-med-and-down">
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About Me</Link>
            </li>
            <li>
                <Link to='/skills'>Skills</Link>
            </li>
            <li>
                <Link to='/contactme'>Contact Me</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar1
