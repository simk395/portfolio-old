import React, { Component } from 'react';
import Summary from './Summary';
import Tools from './Tools';
import Landing from './Landing';
import Skills from './Skills';
import Education from './Education';

export class Home extends Component {
  disableScroll = () => {
    document.body.style.overflow = 'hidden';
  };
  enableScroll = () => {
    document.body.style.overflow = 'initial';
  };
  render() {
    if (window.location.href === 'http://localhost:3000/') {
      let i = 0;
      window.onload = this.disableScroll;
      window.addEventListener('wheel', e => {
        e.stopPropagation();
        let ids = ['intro', 'bio', 'skills', 'tools', 'education'];
        if (e.deltaY > 0 && i + 1 <= ids.length - 1) {
          i += 1;
          var elmnt = document.getElementById(ids[i]);
          elmnt.scrollIntoView();
        } else if (e.deltaY < 0 && i - 1 >= 0) {
          i -= 1;
          var elmnt = document.getElementById(ids[i]);
          elmnt.scrollIntoView();
        }
        console.log(i);
      });
    } else {
      window.onload = this.enableScroll;
    }
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
