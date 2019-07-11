import React, { Component } from 'react';

export class Landing extends Component {
  render() {
    return (
      <section data-id='1' id='intro'>
        <h1 data-section='intro' className='greeting'>
          Hello, my name is Simon.
        </h1>
        <h1 data-section='intro' className='greeting'>
          Welcome to my site.
        </h1>
      </section>
    );
  }
}

export default Landing;
