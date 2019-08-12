import React from 'react';

export const Summary = () => {
  return (
    <section id='bio'>
      <img className='bio-pic' src='./images/me.jpg' alt="Simon Kong" />
      <h3 className='bio-name'>Simon Kong</h3>
      <a className='btn' href="mailto:skongnyc@gmail.com">Contact</a>
      <div className='bio-details'>
        <p>Full Stack Software Engineer based in New York who specializes in front-end development.</p>
        <p>I mostly use Javascript/NodeJS but can also work with Ruby. Driven, Avid learner, Team-Oriented programmer.</p>
      </div>
    </section >
  );
}

export default Summary;
