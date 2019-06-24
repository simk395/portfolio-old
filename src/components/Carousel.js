import React, { Component } from 'react';
import 'flickity';

export class Carousel extends Component {
  render() {
    return (
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
    );
  }
}

export default Carousel;
