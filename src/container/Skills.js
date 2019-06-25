import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import Icons from '../components/Skillicons';

export class Skills extends Component {
  render() {
    return (
      <section id='skills'>
        <div className='html'>
          <div className='html-column'>
            <span>H</span>yper <span>T</span>ext<span>M</span>arkup
            <span>L</span>anguage
          </div>
          <img className='skills-icon' src='./icons/html5.png' />
        </div>
        <div className='css'>
          <div className='css-column'>CSS</div>
          <img className='skills-icon' src='./icons/css.png' />
        </div>
        <div className='js'>
          <div className='js-column'>column</div>
          <img className='skills-icon' src='./icons/javascript.png' />
        </div>
      </section>
    );
  }
}

export default Skills;
