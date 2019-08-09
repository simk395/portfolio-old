import React, { Component } from 'react';
import Summary from '../components/Summary';
import Skill from '../components/Skill'
import Education from '../components/Education'


export class Home extends Component {
  render() {
    return (
      <div id='home'>
        <Summary />
        <Skill />
        <Education />
      </div>
    );
  }
}

export default Home;
