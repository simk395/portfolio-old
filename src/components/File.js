import React, { Component } from 'react';

export class File extends Component {
  handleClick = e => {
    console.log(e.target);

    const repos = document.querySelector('#repos');
    const popup = document.createElement('div');
    const details = document.createElement('div');

    details.className = 'file-details';
    popup.className = 'file-popup';

    popup.append(details);
    repos.append(popup);
  };

  render() {
    const { name } = this.props;

    return (
      <div onClick={this.handleClick} className='file'>
        <h6 className='repo-title'>{name}</h6>
      </div>
    );
  }
}

export default File;
