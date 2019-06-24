import React, { Component } from 'react';
import Left from '../components/Left';
import Right from '../components/Right';

export class Header extends Component {
  render() {
    return (
      <div className='container'>
        <Left />
        <Right />
      </div>
    );
  }
}

export default Header;
