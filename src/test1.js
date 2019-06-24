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
        <div
          className='main-carousel js-flickity'
          data-flickity-options='{ "cellAlign": "center", "contain": true, "wrapAround": true, "autoPlay":3000 }'
        >
          <div className='carousel-cell'>
            <img className='carousel-icon' src='./icons/react.png' />
          </div>
          <div className='carousel-cell'>
            <img className='carousel-icon' src='./icons/postgres.png' />
          </div>
          <div className='carousel-cell'>
            <img className='carousel-icon' src='./icons/rails.png' />
          </div>
          <div className='carousel-cell'>
            <img className='carousel-icon' src='./icons/node.png' />
          </div>
          <div className='carousel-cell'>
            <img className='carousel-icon' src='./icons/sass.png' />
          </div>
          <div className='carousel-cell'>
            <img className='carousel-icon' src='./icons/mongodb.jpg' />
          </div>
        </div>
      </section>
    );
  }
}

export default test1;
