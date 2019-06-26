import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import Icons from '../components/Skillicons';

export class Skills extends Component {
  shrinkColumn = e => {
    console.log(e);
    const html = document.querySelector('.html').classList;
    const htmlCol = document.querySelector('.html-column').classList;
    const css = document.querySelector('.css').classList;
    const cssCol = document.querySelector('.css-column').classList;
    const js = document.querySelector('.js').classList;
    const jsCol = document.querySelector('.js-column').classList;
    const g = 'skills-grow';
    const s = 'shrink';
    switch (e.target.className) {
      case 'html-column':
        css.remove(g);
        cssCol.remove(s);
        js.remove(g);
        jsCol.remove(s);
        htmlCol.add(s);
        html.add(g);
        break;
      case 'css-column':
        html.remove(g);
        htmlCol.remove(s);
        js.remove(g);
        jsCol.remove(s);
        cssCol.add(s);
        css.add(g);
        break;
      case 'js-column':
        html.remove(g);
        htmlCol.remove(s);
        css.remove(g);
        cssCol.remove(s);
        jsCol.add(s);
        js.add(g);
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
