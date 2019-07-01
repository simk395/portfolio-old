import React, { Component } from 'react';
import Summary from './Summary';
import Tools from './Tools';
import Landing from './Landing';
import Skills from './Skills';
import Education from './Education';

export class Home extends Component {
  //If i do not use scroll to top i need to use datasets for all elements
  //then i can use e.target.previous or next sibling to slideshow
  //need dataset because if i hover anything not <section> then i have to search for it

  scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    let i = 0;
    window.onload = this.scrollToTop;
    document.body.style.overflow = 'hidden';
    window.addEventListener('wheel', e => {
      const sections = document.querySelectorAll('section');
      const length = sections.length - 1;
      if (e.deltaY < 0 && i - 1 >= 0) {
        i--;
        sections[i].scrollIntoView();
      } else if (e.deltaY > 0 && i + 1 <= length) {
        i++;
        sections[i].scrollIntoView();
      }
    });

    return (
      <div>
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
