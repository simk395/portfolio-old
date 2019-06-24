import React, { Component } from 'react';
import 'flickity';

export class test1 extends Component {
  render() {
    return (
      <section id='skills'>
        <h1 className='skills-text'>Experienced with:</h1>
        <div id='skills-icon'>
          <img className='skills-icon' src='./icons/html5.png' />
          <img className='skills-icon' src='./icons/css.png' />
          <img className='skills-icon' src='./icons/javascript.png' />
        </div>
        <h1 className='skills-text'>Some tools that I enjoy using:</h1>
      </section>
    );
  }
}

export default test1;
