import React from 'react';
import './App.css';
import Summary from './container/Summary';
import Navbar from './container/Navbar';
import Tools from './container/Tools';
import Landing from './container/Landing';
import Skills from './container/Skills';
import Education from './container/Education';

function App() {
  // let i = 0;
  // window.onload = disableScroll;
  // window.addEventListener('wheel', e => {
  //   e.stopPropagation();
  //   let ids = ['intro', 'bio', 'skills', 'tools', 'education'];
  //   if (e.deltaY > 0 && i + 1 <= ids.length - 1) {
  //     i += 1;
  //     var elmnt = document.getElementById(ids[i]);
  //     elmnt.scrollIntoView();
  //   } else if (e.deltaY < 0 && i - 1 >= 0) {
  //     i -= 1;
  //     var elmnt = document.getElementById(ids[i]);
  //     elmnt.scrollIntoView();
  //   }
  //   console.log(i);
  // });

  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }
  function enableScroll() {
    document.body.style.overflow = 'initial';
  }

  return (
    <div className='main'>
      <Navbar />
      <Landing />
      <Summary />
      <Skills />
      <Tools />
      <Education />
    </div>
  );
}

export default App;
