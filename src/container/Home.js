import React, { Component } from 'react';
import Summary from './Summary';
import Tools from './Tools';
import Landing from './Landing';
import Skills from './Skills';
import Education from './Education';

export class Home extends Component {
  componentDidMount() {
    const home = document.querySelector('#home');
    home.addEventListener('wheel', this.blackNav);
  }

  blackNav = e => {
    console.log(e);
    const nav = document.querySelector('nav');
    if (window.scrollY > window.innerHeight) {
      nav.classList.add('inverse');
    } else if (
      nav.className.includes('inverse') &&
      window.scrollY <= window.innerHeight
    ) {
      nav.classList.remove('inverse');
    }
  };

  render() {
    return (
      <div id='home'>
        <Landing />
        <Summary />
        <Skills />
        <Tools />
        <Education />
      </div>
    );
  }
}

export default Home;
