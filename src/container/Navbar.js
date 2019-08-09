import React, { Component } from 'react';
import Github from '../svg/github.svg';
import Linkedin from '../svg/linkedin.svg';
import Medium from '../svg/medium.png';
import Gmail from '../svg/gmail.png';
import { Link } from 'react-router-dom';

export class Navbar extends Component {

  createIcon = (name) => {
    return <img className='nav-icon' src={name} alt={`${name} icon`} />
  }

  createLink = (name) => {
    return <Link className="nav-path" to={`/${name}`}>{name}</Link>
  }

  render() {
    let icons = [Medium, Linkedin, Github, Gmail]
    let links = ['Home', 'Projects', 'Repos', 'Blogs']
    return (
      <nav>
        {links.map(link => this.createLink(link))}
        {icons.map(icon => this.createIcon(icon))}
      </nav>
    );
  }
}

export default Navbar;
