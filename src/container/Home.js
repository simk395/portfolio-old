import React, { Component } from 'react';
import Summary from './Summary';
import Tools from './Tools';
import Landing from './Landing';
import Skills from './Skills';
import Education from './Education';

export class Home extends Component {
  render() {
    let i = 0;
    document.body.style.overflow = 'hidden';
    // Problem: This event listener is still running even when pages change which is bad
    window.addEventListener('wheel', e => {
      if (window.location.href !== 'http://localhost:3000/') {
        return null;
      }
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
