import React, { Component } from 'react';

export class Summary extends Component {
  render() {
    return (
      <section id='bio'>
        <div className='bio-left'>
          <img className='me' src='me.jpg' />
        </div>
        <div className='bio-right'>
          <p>Hello. My name is Simon Kong. </p>
          <p>I am a Full Stack developer based in New York. </p>
          <p>
            I graduated from Flatiron School to start a career in software
            development
          </p>
          <p>
            I study Computer Science at Queens College in Flushing, New York.
          </p>
        </div>
      </section>
    );
  }
}

export default Summary;
