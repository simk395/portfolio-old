import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import Icons from '../components/Skillicons';

export class Skills extends Component {
  shrinkColumn = e => {
    console.log(e);
    const html = document.querySelector('.html');
    const htmlCol = document.querySelector('.html-column');
    const css = document.querySelector('.css');
    const cssCol = document.querySelector('.css-column');
    const js = document.querySelector('.js-column');
    switch (e.target.className) {
      case 'html-column':
        e.target.classList.add('shrink');
        html.classList.add('skills-grow');
        css.classList.remove('skills-grow');
        cssCol.classList.remove('shrink');
        break;
      case 'css-column':
        e.target.classList.add('shrink');
        css.classList.add('skills-grow');
        html.classList.remove('skills-grow');
        htmlCol.classList.remove('shrink');
        console.log('hello');
        break;
    }
  };
  render() {
    return (
      <section onClick={this.shrinkColumn} id='skills'>
        <div className='html'>
          <div className='html-column'>HTML</div>
          {/* <img className='skills-icon' src='./icons/html5.png' /> */}
        </div>
        <div className='css'>
          <div className='css-column'>CSS</div>
          {/* <img className='skills-icon' src='./icons/css.png' /> */}
        </div>
        <div className='js'>
          <div className='js-column'>JS</div>
          {/* <img className='skills-icon' src='./icons/javascript.png' /> */}
        </div>
      </section>
    );
  }
}

export default Skills;
