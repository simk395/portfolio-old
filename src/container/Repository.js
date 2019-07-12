import React, { Component } from 'react';
import File from '../components/File';

export class Repository extends Component {
  state = {
    repos: [],
  };

  componentDidMount() {
    fetch('https://api.github.com/users/simk395/repos?per_page=50&&page=1')
      .then(resp => resp.json())
      .then(resp => this.setState({ repos: resp }));
  }
  render() {
    return (
      <section id='repos'>
        <div className='cabinet'>
          {this.state.repos.map(repo => (
            <File name={repo.name} />
          ))}
        </div>
        <div className='file-popup'>
          <div className='file-details'>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Repository;
