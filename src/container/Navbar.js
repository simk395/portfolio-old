import React, { Component } from 'react';
import Github from '../svg/github.svg';
import Linkedin from '../svg/linkedin.svg';
import Medium from '../svg/medium.png';
import Gmail from '../svg/gmail.png';
import Home from '../svg/home.png'
import Projects from '../svg/projects.jpg'
import Repos from '../svg/repository.png'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions)
  }

  updateDimensions = () => {
    let w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName('body')[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
      height = w.innerHeight || documentElement.clientHeight || body.clientHeight;
    this.setState({ width, height })
  }

  createIcon = (name) => {
    return <a href={name.source[1]} target='_blank'>
      <img
        className='nav-icon'
        src={name.source[0]}
        alt={`${name.source[0]} icon`} />
    </a>
  }

  createLink = (name) => {
    return <Link className="nav-path" to={`/${name}`}>{name}</Link>
  }

  createLinkIcon = (name) => {
    return <Link to={`/${name.source[1]}`}><img className='nav-icon' src={name.source[0]} /></Link>
  }

  render() {
    const { width } = this.state;
    const icons = [
      { source: [Medium, 'https://medium.com/@simon.kong95'] },
      { source: [Linkedin, 'https://www.linkedin.com/in/skongnyc/'] },
      { source: [Github, 'https://github.com/simk395'] },
      { source: [Gmail, 'mailto:skongnyc@gmail.com'] }
    ];
    const links = ['Home', 'Projects', 'Repos'];
    const linksImg = [
      { source: [Home, 'Home'] },
      { source: [Projects, 'Projects'] },
      { source: [Repos, 'Repos'] },
    ];
    return (
      <nav>
        <div className="nav-container">
          {width <= 1024 ? linksImg.map(link => this.createLinkIcon(link)) : links.map(link => this.createLink(link))}
          {icons.map(icon => this.createIcon(icon))}
        </div>
      </nav>
    );
  }
}

export default Navbar;
