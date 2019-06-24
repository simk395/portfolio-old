import React, { Component } from 'react';

export class About extends Component {
  render() {
    return (
      <section id='bio'>
        <div className='bio-left'>
          <img className='me' src='me.jpg' />
        </div>
        <div className='bio-right'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </section>
    );
  }
}

export default About;
