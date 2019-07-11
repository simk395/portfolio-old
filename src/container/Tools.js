import React, { Component } from 'react';

export class Tools extends Component {
  render() {
    return (
      <section data-id='4' id='tools'>
        <h1>Some tools that I enjoy using:</h1>
        <div className='tools-div'>
          <img name='react' className='tools-icon' src='./icons/react.png' />
          <img className='tools-icon' src='./icons/postgres.png' />
          <img className='tools-icon' src='./icons/rails.png' />
          <img className='tools-icon' src='./icons/node.png' />
        </div>
        <div className='tools-div'>
          <img className='tools-icon' src='./icons/sass.png' />
          <img className='tools-icon' src='./icons/mongodb.png' />
          <img className='tools-icon' src='./icons/git.png' />
          <img className='tools-icon' src='./icons/express.png' />
        </div>
        <div className='tools-div'>
          <img className='tools-icon' src='./icons/bootstrap.png' />
          <img className='tools-icon' src='./icons/sqlite.png' />
        </div>
      </section>
    );
  }
}

export default Tools;
