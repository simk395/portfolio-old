import React, { Component } from 'react';

export class Projects extends Component {
  state = {
    videos: []
  }

  componentDidMount() {
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems/?key=${process.env.REACT_APP_SECRET}&part=snippet&playlistId=PLXioOEumDzT0lLGN0SIcRnOSh6MC6ABwS`)
      .then(resp => resp.json())
      .then(youtube => this.setState({ videos: youtube.items }))
  }

  render() {
    const { videos } = this.state
    console.log(videos)
    return <div>
      <ul>
        <li> <iframe width="420" height="280" src="https://www.youtube.com/embed/mhgS6TNkX9Q" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
      </ul>
    </div>;
  }
}

export default Projects;
