import React, { Component } from 'react';
import Icons from './Icon';

export class Left extends Component {
  render() {
    return (
      <div className='left'>
        <img className='me' src='./me.jpg' />
        <Icons />
        <a className='contact' href='mailto:skongnyc@gmail.com'>
          Contact
        </a>
      </div>
    );
  }
}

export default Left;
