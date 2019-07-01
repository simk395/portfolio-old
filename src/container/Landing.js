import React, { Component } from 'react';

export class Landing extends Component {
  render() {
    const { slideshow } = this.props;
    return (
      <section id='intro'>
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
