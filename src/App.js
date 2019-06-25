import React from 'react';
import './App.css';
import Summary from './container/Summary';
import Navbar from './container/Navbar';
import Details from './container/Details';
import Header from './container/Header';
import Test1 from './test1';
import Landing from './container/Landing';
import About from './components/About';
import Skills from './container/Skills';

function App() {
  let i = 0;
  window.onload = disableScroll;
  window.addEventListener('wheel', e => {
    e.stopPropagation();
    let ids = ['intro', 'bio', 'skills'];
    if (e.deltaY > 0 && i + 1 <= ids.length - 1) {
      i += 1;
      var elmnt = document.getElementById(ids[i]);
      elmnt.scrollIntoView();
    } else if (e.deltaY < 0 && i - 1 >= 0) {
      i -= 1;
      var elmnt = document.getElementById(ids[i]);
      elmnt.scrollIntoView();
    }
    console.log(i);
  });

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
      <About />
      <Skills />
    </div>
  );
}

export default App;
