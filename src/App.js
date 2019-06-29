import React from 'react';
import './App.css';
import Navbar from './container/Navbar';
import Home from './container/Home';
import Projects from './container/Projects';
import { Switch, Route } from 'react-router-dom';
import Blogs from './container/Blogs';

function App() {
  let i = 0;
  window.onload = disableScroll;
  window.addEventListener('wheel', e => {
    e.stopPropagation();
    let ids = ['intro', 'bio', 'skills', 'tools', 'education'];
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
      <Switch>
        <Route path='/projects' component={Projects} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
