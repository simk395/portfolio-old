import React, { Component } from 'react';
import Github from '../svg/github.svg';
import Linkedin from '../svg/linkedin.svg';
import Medium from '../svg/medium.png';

export class Navbar extends Component {
  render() {
    return (
      <nav id='nav'>
        Simon Kong
        <div className='nav-icons'>
          <img className='nav-icon' src={Medium} />
          <img className='nav-icon' src={Linkedin} />
          <img className='nav-icon' src={Github} />
        </div>
      </nav>
    );
  }
}

export default Navbar;
