import React, { Component } from 'react';
import Summary from './Summary';
import Tools from './Tools';
import Landing from './Landing';
import Skills from './Skills';
import Education from './Education';

export class Home extends Component {
  componentDidMount() {
    const nav = document.querySelector('nav');
    const home = document.querySelector('#home');
    home.addEventListener('wheel', e => {
      if (window.scrollY > window.innerHeight) {
        nav.classList.add('inverse');
      } else if (
        nav.className.includes('inverse') &&
        window.scrollY <= window.innerHeight
      ) {
        nav.classList.remove('inverse');
      }
    });
  }
  //If i do not use scroll to top i need to use datasets for all elements
  //then i can use e.target.previous or next sibling to slideshow
  //need dataset because if i hover anything not <section> then i have to search for it
  render() {
    //get an array of all the sections
    //save a variable of prev next and current

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
