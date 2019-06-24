import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import Icons from '../components/Skillicons';

export class Skills extends Component {
  render() {
    return (
      <section id='skills'>
        <h1 className='skills-text'>Experienced with:</h1>
        <Icons />
        <h1 className='skills-text'>Some tools that I enjoy using:</h1>
        <Carousel />
      </section>
    );
  }
}

export default Skills;
