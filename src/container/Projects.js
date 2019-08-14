import React, { Component } from 'react';

export class Projects extends Component {
  state = {
    videos: []
  }

  componentDidMount() {
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems/?key=${process.env.REACT_APP_STUFF}&part=snippet&playlistId=PLXioOEumDzT0lLGN0SIcRnOSh6MC6ABwS&maxResults=50`)
      .then(resp => resp.json())
      .then(youtube => this.setState({ videos: youtube.items }))
  }

  embedVideos = (video) => {
    const { snippet } = video
    return <li key={snippet.resourceId.videoId} className="list-item project-list-item">
      <iframe
        className="video"
        title={`${snippet.title}`}
        width="420"
        height="280"
        src={`https://www.youtube.com/embed/${snippet.resourceId.videoId}`}
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
      <p>{snippet.title}</p>
    </li>
  }

  render() {
    const { videos } = this.state
    return <div id="project" className="page">
      <ul className="project-list">
        {videos.map(video => this.embedVideos(video))}
      </ul>
    </div>;
  }
}

export default Projects;
