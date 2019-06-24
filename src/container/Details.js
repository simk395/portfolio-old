import React, { Component } from 'react';
import Projects from '../components/Projects';
import Demos from '../components/Demos';
import Blogs from '../components/Blogs';
import About from '../components/About';

export class Details extends Component {
  state = {
    display: 0,
  };

  changeDisplay = e => {
    switch (e.target.innerText) {
      case 'Projects':
        this.setState({ display: 0 });
        break;
      case 'Demos':
        this.setState({ display: 1 });
        break;
      case 'Blogs':
        this.setState({ display: 2 });
        break;
      case 'About':
        this.setState({ display: 3 });
        break;
    }
  };

  showDisplay = () => {
    const { display } = this.state;
    switch (display) {
      case 0:
        return <Projects />;
      case 1:
        return <Demos />;
      case 2:
        return <Blogs />;
      case 3:
        return <About />;
    }
  };

  render() {
    const { display } = this.state;

    return (
      <div className='details'>
        <ul className='details-list' onClick={this.changeDisplay}>
          <li> Projects</li>
          <li> Demos </li>
          <li> Blogs </li>
          <li> About </li>
        </ul>
        {this.showDisplay()}
      </div>
    );
  }
}

export default Details;
