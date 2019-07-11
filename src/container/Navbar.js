import React, { Component } from 'react';
import Github from '../svg/github.svg';
import Linkedin from '../svg/linkedin.svg';
import Medium from '../svg/medium.png';
import Gmail from '../svg/gmail.png';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  blackColor = () => {
    const nav = document.querySelector('#nav');
    nav.classList.remove('inverse');
  };
  whiteColor = () => {};

  render() {
    return (
      <nav>
        <p>Simon Kong</p>
        <div className='nav-items'>
          <div className='nav-paths'>
            <Link onClick={this.changeColor} className='nav-path' to='/'>
              Home
            </Link>
            <Link
              onClick={this.changeColor}
              className='nav-path'
              to='/projects'
            >
              Projects
            </Link>
            <Link onClick={this.changeColor} className='nav-path' to='/blogs'>
              Blogs
            </Link>
          </div>
          <div className='nav-icons'>
            <img className='nav-icon' src={Medium} />
            <img className='nav-icon' src={Linkedin} />
            <img className='nav-icon' src={Github} />
            <img className='nav-icon' src={Gmail} />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
