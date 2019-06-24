import React, { Component } from 'react';
import 'flickity';

export class test1 extends Component {
  render() {
    return (
      <section id='skills'>
        <h1>Some tools I am experienced with</h1>
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
          <div class='carousel-cell' />
          <div class='carousel-cell' />
          <div class='carousel-cell' />
          <div class='carousel-cell' />
          <div class='carousel-cell' />
        </div>
      </section>
    );
  }
}

export default test1;
