import React, { Component } from 'react';
import 'flickity';

export class test1 extends Component {
  render() {
    return (
      <section id='skills'>
        <h1>Experienced with:</h1>
        <img className='skills-icon' src='./icons/html5.png' />
        <img className='skills-icon' src='./icons/css.png' />
        <img className='skills-icon' src='./icons/javascript.png' />
        <h1>Some tools that I use:</h1>
        <div
          class='main-carousel js-flickity'
          data-flickity-options='{ "cellAlign": "center", "contain": true, "wrapAround": true }'
        >
          <div class='carousel-cell'>
            <img src='me.jpg' />
          </div>
          <div class='carousel-cell'>
            <img src='me.jpg' />
          </div>
          <div class='carousel-cell'>
            <img src='me.jpg' />
          </div>
          <div class='carousel-cell'>
            <img src='me.jpg' />
          </div>
          <div class='carousel-cell'>
            <img src='me.jpg' />
          </div>
          <div class='carousel-cell'>
            <img src='me.jpg' />
          </div>
          <div class='carousel-cell'>
            <img src='me.jpg' />
          </div>
          <div class='carousel-cell'>
            <img src='me.jpg' />
          </div>
        </div>
      </section>
    );
  }
}

export default test1;
