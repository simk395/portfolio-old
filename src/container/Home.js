import React, { Component } from 'react';
import Summary from './Summary';
import Tools from './Tools';
import Landing from './Landing';
import Skills from './Skills';
import Education from './Education';

export class Home extends Component {
  render() {
    return (
      <div>
        <Landing />
        <Summary />
        <Skills />
        <Tools />
        <Education />
      </div>
    );
  }
}

export default Home;
