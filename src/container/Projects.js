import React, { Component } from 'react';

export class Projects extends Component {
  componentDidMount() {
    fetch('https://api.github.com/users/simk395/repos')
      .then(resp => resp.json())
      .then(resp => console.log(resp));
  }

  render() {
    document.body.style.overflow = 'initial';
    return <div>Hello</div>;
  }
}

export default Projects;
