import React, { Component } from 'react';

export class Tools extends Component {
  render() {
    return (
      <section id='tools'>
        <div className='tools-div'>
          <img name='react' className='carousel-icon' src='./icons/react.png' />
          <img className='carousel-icon' src='./icons/postgres.png' />
          <img className='carousel-icon' src='./icons/rails.png' />
          <img className='carousel-icon' src='./icons/node.png' />
        </div>
        <div className='tools-div'>
          <img className='carousel-icon' src='./icons/sass.png' />
          <img className='carousel-icon' src='./icons/mongodb.png' />
          <img className='carousel-icon' src='./icons/git.png' />
          <img className='carousel-icon' src='./icons/express.png' />
        </div>
        <div className='tools-div'>
          <img className='carousel-icon' src='./icons/bootstrap.png' />
          <img className='carousel-icon' src='./icons/sqlite.png' />
        </div>
        <div className='gradient' />
      </section>
    );
  }
}

export default Tools;
