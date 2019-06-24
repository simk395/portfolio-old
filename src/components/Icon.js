import React, { Component } from 'react';

export class Icon extends Component {
  render() {
    return (
      <div className='icons'>
        <a
          className='links'
          href='https://github.com/simk395'
          title='Github'
          target='_blank'
        >
          <img className='icon' src='github.png' />
        </a>
        <a
          className='links'
          href='https://www.linkedin.com/in/skongnyc'
          title='Linkedin'
          target='_blank'
        >
          <img className='icon' src='linkedin.png' />
        </a>
        <a
          className='links'
          href='https://drive.google.com/file/d/1GAZWkfmJY6wGotiFFPeDOOPTSl9gs2Kt/view?usp=sharing'
          title='CV'
          target='_blank'
        >
          <img className='icon' src='cv.png' />
        </a>
      </div>
    );
  }
}

export default Icon;
