import React, { Component } from 'react';

export class Landing extends Component {
  render() {
    return (
      <section id='intro'>
        <h1 className='greeting'>Hello, my name is Simon.</h1>
        <h1 className='greeting'>Welcome to my site.</h1>
      </section>
    );
  }
}

export default Landing;
