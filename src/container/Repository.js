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
      <div id='repos' className="page">
        <h2>Most Recent Repositories</h2>
        <ol>
          {repos.map(repo => <li key={repo.name} className="repos-list-item"><a href={repo.html_url}>{repo.name}</a></li>)}
        </ol>
      </div>
    );
  }
}

export default Repository;
