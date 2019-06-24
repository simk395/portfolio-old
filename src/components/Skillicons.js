import React, { Component } from 'react';

export class Skillicons extends Component {
  render() {
    return (
      <div id='skills-icon'>
        <img className='skills-icon' src='./icons/html5.png' />
        <img className='skills-icon' src='./icons/css.png' />
        <img className='skills-icon' src='./icons/javascript.png' />
      </div>
    );
  }
}

export default Skillicons;
