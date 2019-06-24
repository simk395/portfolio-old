import React, { Component } from 'react';

export class Landing extends Component {
  render() {
    return (
      <div className='intro'>
        <h1 className='greeting'>Hello, my name is Simon.</h1>
        <h1 className='greeting'>Welcome to my site.</h1>
        <a href='#'>
          <button className='contact'>Meet Simon</button>
        </a>
      </div>
    );
  }
}

export default Landing;
