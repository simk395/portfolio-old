import React from 'react';
import './App.css';
import Summary from './container/Summary';
import Navbar from './container/Navbar';
import Details from './container/Details';
import Header from './container/Header';
import Test1 from './test1';
import Landing from './container/Landing';
import About from './components/About';

function App() {
  // window.onload = disableScroll;
  // window.addEventListener('wheel', e => {
  //   console.log(e);
  //   if (e.deltaY > 0) {
  //     window.scrollTo(0, 689);
  //   } else {
  //     window.scrollTo(0, 0);
  //   }
  // });

  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }
  function enableScroll() {
    document.body.style.overflow = 'initial';
  }

  return (
    <div className='main'>
      <Landing />
      <About />
      <Test1 />
    </div>
  );
}

export default App;
