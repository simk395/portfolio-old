import React, { Component } from 'react';

export class Repository extends Component {
  state = {
    repos: [],
  };

  componentDidMount() {
    fetch('https://api.github.com/users/simk395/repos?per_page=50&sort=updated')
      .then(resp => resp.json())
      .then(resp => this.setState({ repos: resp }));
  }

  render() {
    const { repos } = this.state
    return (
      <section id='repos'>
        <ol>
          {repos.map(repo => <li><a href={repo.html_url}>{repo.name}</a></li>)}
        </ol>
      </section>
    );
  }
}

export default Repository;
